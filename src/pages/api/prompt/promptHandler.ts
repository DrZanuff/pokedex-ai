// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"
import { get } from "lodash"
import { generatePrompt } from "@/src/helpers/generatePrompt"
import type { PromptResponseData, Error } from "./promptHandler.types"

export async function promptHandler(
  req: NextApiRequest,
  res: NextApiResponse<PromptResponseData | Error>
) {
  const apiKey = process.env.OPENAI_API || ""
  const organization = process.env.OPENAI_ORG || ""

  if (!apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    })
    return
  }

  const prompt = String(get(req, "body.prompt", ""))

  if (!prompt) {
    res.status(500).json({
      error: {
        message: "Missing prompt on the payload",
      },
    })
  }

  const configuration = new Configuration({
    apiKey,
    organization,
  })

  const openai = new OpenAIApi(configuration)

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(prompt),
      max_tokens: 200,
      temperature: 0,
    })

    const promptResponse =
      completion?.data?.choices[0].text || "Sorry, something went wrong"

    res.status(200).json({ promptResponse })
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data)
      res.status(error.response.status).json({
        error: {
          message: error.response.data,
        },
      })
    } else {
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      })
    }
  }
}
