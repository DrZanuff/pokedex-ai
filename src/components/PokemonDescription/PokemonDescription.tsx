import { PokemonImage } from './components/PokemonImage'
import { PokemonStats } from './components/PokemonStats'
import * as S from './PokemonDescription.css'

export function PokemonDescription() {
  return (
    <div className={S.PokemonDescriptionContainer}>
      <PokemonImage />
      <PokemonStats />
    </div>
  )
}
