/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { currentPokemonContext } from '@/src/globalAtoms'
import { isEmpty } from 'lodash'
import * as S from './PokemonImage.css'

export function PokemonImage() {
  const currentPokemon = useRecoilValue(currentPokemonContext)

  const pokemonName = useMemo(() => {
    // const id = currentPokemon?.id ? currentPokemon.id + '. ' : ''
    const name = currentPokemon?.name ? currentPokemon.name : ''
    return name
  }, [currentPokemon])

  const pokemonID = useMemo(() => {
    const id = currentPokemon?.id ? currentPokemon.id : ''
    return id
  }, [currentPokemon])

  return (
    <div className={S.PokemonImageContainer}>
      <div className={S.PokemonName}>{pokemonName}</div>
      <div className={S.PokemonID}>{pokemonID}</div>
      {isEmpty(currentPokemon) ? (
        <div className={S.EmpytImageHolder}>
          <span />
        </div>
      ) : (
        <div className={S.ImageContainer}>
          <img
            className={S.ImageElement}
            src={currentPokemon.sprites.front_default}
            alt={currentPokemon.name}
          />
        </div>
      )}
    </div>
  )
}
