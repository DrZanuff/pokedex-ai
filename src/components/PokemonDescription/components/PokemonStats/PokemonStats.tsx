import type { PokemonStatsProps } from './PokemonStats.types'
import * as S from './PokemonStats.css'

export function PokemonStats ( { value } : PokemonStatsProps ) {

  return (
    <div className={S.PokemonStatsContainer}>
      <h1>PokemonStats</h1>
      <h2>{value}</h2>
    </div>
  )
}