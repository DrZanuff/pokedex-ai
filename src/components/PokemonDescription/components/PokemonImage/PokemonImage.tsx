/* eslint-disable @next/next/no-img-element */
import { useRecoilValue } from "recoil"
import { currentPokemonContext } from "@/src/globalAtoms"
import { isEmpty } from "lodash"
import * as S from "./PokemonImage.css"

export function PokemonImage() {
  const currentPokemon = useRecoilValue(currentPokemonContext)

  return (
    <div className={S.PokemonImageContainer}>
      {isEmpty(currentPokemon) ? (
        <div className={S.EmpytImageHolder}></div>
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
