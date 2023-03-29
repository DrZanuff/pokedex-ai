import { useState, useCallback } from 'react'
import { PromptResponseData } from '../../pages/api/prompt/promptHandler.types'
import { Feedback } from '@/src/components/Feedback'
import axios from 'axios'
import { getPokemon } from '../../services/requests/getPokemon'
import { useSetRecoilState } from 'recoil'
import { currentPokemonContext } from '@/src/globalAtoms'
import * as S from './Prompt.css'

export function Prompt() {
  const [promptText, setPromptText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonName, setPokemonName] = useState('')
  const setCurrentPokemon = useSetRecoilState(currentPokemonContext)

  const handlePromptChange = useCallback((value: string) => {
    setPromptText(() => (value.length > 280 ? value.slice(0, 280) : value))
  }, [])

  const handlePromptConfirm = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await axios.post<PromptResponseData>('/api/prompt', {
        prompt: promptText,
      })

      const preFormattedPokemon = String(
        response.data.promptResponse || ''
      ).split('\n')

      const pokemon =
        preFormattedPokemon[preFormattedPokemon.length > 0 ? 1 : 0]

      const formattedPokemonName = String(pokemon)
        .replace(/[?. ]+/g, '')
        .replace(/\r?\n|\r/, '')
        .toLowerCase()
        .trim()

      console.log('DBG: AI API response', { response, promptText })
      if (formattedPokemonName.includes('error')) {
        throw 'Sorry, no pokemon found with this description... Try to improve your prompt.'
      }

      const currentPokemon = await getPokemon(formattedPokemonName)
      setCurrentPokemon(currentPokemon)
      setPokemonName(formattedPokemonName)
    } catch (e: any) {
      console.log(e)
      setPokemonName(`Pokemon not found... ${e?.request?.responseURL || e}`)
    }

    setIsLoading(false)
  }, [promptText, setCurrentPokemon])

  return (
    <div className={S.PromptContainer}>
      <textarea
        placeholder="Describe a pokemon a click in the PROMPT button..."
        onChange={(event) => handlePromptChange(event.target.value)}
        value={promptText}
        rows={5}
        cols={33}
      />
      <Feedback feedback={pokemonName} isLoading={isLoading} />
      <button
        disabled={promptText.length === 0 || isLoading}
        onClick={handlePromptConfirm}>
        Prompt
      </button>
    </div>
  )
}
