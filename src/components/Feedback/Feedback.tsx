import type { FeedbackProps } from './Feedback.types'
import * as S from './Feedback.css'

export function Feedback({ feedback, isLoading }: FeedbackProps) {
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className={S.FeedbackContainer}>
      {feedback && !isLoading && (
        <div className={S.FeedbackBox}>
          <span>{capitalizeFirstLetter(feedback)}</span>
        </div>
      )}
    </div>
  )
}
