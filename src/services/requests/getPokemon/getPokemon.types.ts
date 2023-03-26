interface Stats {
  base_stat: number
  stat: {
    name: string
  }
}

interface Types {
  name: string
}

export interface Pokemon {
  height: number
  weight: number
  id: number
  name: string
  sprites: {
    front_default: string
  }
  stats: Stats[]
  types: Types
}

export type PokemonCache = { [key: string]: Pokemon }
