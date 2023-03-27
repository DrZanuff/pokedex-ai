import type { PokemonImageProps } from './PokemonImage.types'
import * as S from './PokemonImage.css'

export function PokemonImage ( { value } : PokemonImageProps ) {

  return (
    <div className={S.PokemonImageContainer}>
      <h1>PokemonImage</h1>
      <h2>{value}</h2>
    </div>
  )
}