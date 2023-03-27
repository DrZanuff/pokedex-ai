import { PokemonDescription } from '@/src/components/PokemonDescription'
import { LineCut } from '@/src/components/LineCut'
import { TopPanel } from '@/src/components/TopPanel'
import { Prompt } from '@/src/components/Prompt'
import * as S from './Pokedex.css'

export function Pokedex() {
  return (
    <div className={S.PokedexContainer}>
      <TopPanel />
      <LineCut />
      <Prompt />
      <PokemonDescription />
    </div>
  )
}
