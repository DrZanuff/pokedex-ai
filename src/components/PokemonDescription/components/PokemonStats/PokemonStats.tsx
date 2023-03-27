import { useRecoilValue } from 'recoil'
import { currentPokemonContext } from '@/src/globalAtoms'
import { isEmpty } from 'lodash'
import { v4 } from 'uuid'
import * as S from './PokemonStats.css'

export function PokemonStats() {
  const currentPokemon = useRecoilValue(currentPokemonContext)

  const emptyStats = [...Array(10).keys()].map(() => (
    <div key={v4()} className={S.Stat}>
      <b></b>
      <span></span>
    </div>
  ))

  return (
    <div className={S.PokemonStatsContainer}>
      {isEmpty(currentPokemon)
        ? emptyStats
        : currentPokemon.stats.map((stat) => (
            <div key={v4()} className={S.Stat}>
              <b>{stat.stat.name}</b>
              <span>{stat.base_stat}</span>
            </div>
          ))}
    </div>
  )
}
