import { atom } from "recoil"
import type { Pokemon } from "@/src/services/requests/getPokemon/getPokemon.types"

export const currentPokemonContext = atom({
  key: "currentPokemonContext",
  default: {} as Pokemon,
})
