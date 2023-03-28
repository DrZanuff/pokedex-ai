/* eslint-disable @next/next/no-img-element */
import * as S from './Logo.css'

export function Logo() {
  return (
    <div className={S.LogoContainer}>
      <img src="/PokeLogo.svg" alt="Logo" />
    </div>
  )
}
