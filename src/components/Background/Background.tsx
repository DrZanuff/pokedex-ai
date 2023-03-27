/* eslint-disable @next/next/no-img-element */
import * as S from './Background.css'

export function Background() {
  return (
    <div className={S.BackgroundContainer}>
      <img src="/background.jpg" alt="background" />
    </div>
  )
}
