import { useState, useCallback } from "react"
import { PromptResponseData } from "../../pages/api/prompt/promptHandler.types"
import axios from "axios"
import * as S from "./Prompt.css"

export function Prompt() {
  const [promptText, setPromptText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonName, setPokemonName] = useState("")

  const handlePromptChange = useCallback((value: string) => {
    setPromptText(() => (value.length > 280 ? value.slice(0, 280) : value))
  }, [])

  const handlePromptConfirm = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await axios.post<PromptResponseData>("/api/prompt", {
        prompt: promptText,
      })
      setPokemonName(response.data.promptResponse)
      // const response = await axios.post("/api/hello", { prompt: "just a test" })
      console.log({ response, promptText })
    } catch (e) {
      console.log(e)
    }

    // const response = fetch('/api/prompt',)

    setIsLoading(false)
  }, [promptText])

  return (
    <div className={S.PromptContainer}>
      <textarea
        placeholder="Describe a pokemon"
        onChange={(event) => handlePromptChange(event.target.value)}
        value={promptText}
        rows={5}
        cols={33}
      />
      <span>Pokemon: {pokemonName}</span>
      <button
        disabled={promptText.length === 0 || isLoading}
        onClick={handlePromptConfirm}>
        Prompt
      </button>
    </div>
  )
}
