// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { get } from 'lodash'
import { generatePrompt } from '@/src/helpers/generatePrompt'
import type { PromptResponseData, Error } from './promptHandler.types'
import axios from 'axios'
import { generateGeminiPrompt } from '@/src/helpers/generatePrompt/generateGeminiPrompt'

export async function promptHandler(
  req: NextApiRequest,
  res: NextApiResponse<PromptResponseData | Error>
) {
  const apiKey = process.env.GEMINI_API || ''
  const url = process.env.GEMINI_URL || ''

  if (!apiKey || !url) {
    res.status(500).json({
      error: {
        message:
          'GEMINI API key or URL not configured, please follow instructions in README.md',
      },
    })
    return
  }

  const prompt = String(get(req, 'body.prompt', ''))

  if (!prompt) {
    res.status(500).json({
      error: {
        message: 'Missing prompt on the payload',
      },
    })
  }

  try {
    const geminiPrompt = generateGeminiPrompt(prompt)

    const response = await axios.post(
      `${url}${apiKey}`,
      generateGeminiPrompt(prompt)
    )

    const completion = response.data?.candidates?.[0]?.content?.parts?.[0]?.text

    const cleanCompletion = String(completion)
      .trim()
      .replace(/\s+/g, '')
      .toLowerCase()

    console.log('DBG:', { cleanCompletion, geminiPrompt })
    const promptResponse = cleanCompletion || 'error'

    res.status(200).json({ promptResponse })
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message)
    } else {
      console.error('Unexpected error:', error)
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      })
    }
  }
}
