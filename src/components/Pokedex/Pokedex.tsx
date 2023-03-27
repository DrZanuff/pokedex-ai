import { PokemonDescription } from '@/src/components/PokemonDescription'
import { Prompt } from '@/src/components/Prompt'
import * as S from './Pokedex.css'

export function Pokedex() {
  return (
    <div className={S.PokedexContainer}>
      <Prompt />
      <PokemonDescription />
    </div>
  )
}
