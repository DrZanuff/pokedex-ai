import * as S from './TradeMark.css'

export function TradeMark() {
  return (
    <div className={S.TradeMarkContainer}>
      <span>
        Created by{' '}
        <a href="https://github.com/DrZanuff" target="_blank">
          Ricardo Machado
        </a>
        <br />
        Pokémon and Pokémon character names are trademarks of Nintendo.
      </span>
    </div>
  )
}
