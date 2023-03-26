import axios from "axios"
import type { Pokemon, PokemonCache } from "./getPokemon.types"

export async function getPokemon(pokemonName: string) {
  const pokedexAiStorage = localStorage.getItem("pokedex-ai-cache") || "{}"
  const parsedPokedexAiStorage = JSON.parse(pokedexAiStorage) as PokemonCache

  const cachedPokemon = parsedPokedexAiStorage?.[pokemonName]

  if (cachedPokemon) {
    return cachedPokemon
  }

  const response = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  )

  const pokemonResponse = response.data
  parsedPokedexAiStorage[pokemonName] = pokemonResponse

  localStorage.setItem(
    "pokedex-ai-cache",
    JSON.stringify(parsedPokedexAiStorage)
  )

  return pokemonResponse
}
