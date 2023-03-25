import { useState, useCallback } from "react"
import { promptInputContext } from "@/src/globalAtoms"
import { useSetRecoilState } from "recoil"
import * as S from "./Prompt.css"

export function Prompt() {
  const [promptText, setPromptText] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handlePromptChange = useCallback((value: string) => {
    setPromptText(() => (value.length > 280 ? value.slice(0, 280) : value))
  }, [])

  const handlePromptConfirm = useCallback(async () => {
    setIsLoading(true)
    console.log(promptText)
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
      <button
        disabled={promptText.length === 0 || isLoading}
        onClick={handlePromptConfirm}>
        Prompt
      </button>
    </div>
  )
}
