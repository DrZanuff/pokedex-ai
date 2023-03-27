import { style, globalStyle } from '@vanilla-extract/css'

export const PokemonStatsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const Stat = style({
  display: 'flex',
  gap: '5px',
  width: '100%',
  border: '2px solid #C3C3C3',
})

globalStyle(`${Stat} b`, {
  color: 'pink',
})

globalStyle(`${Stat} span`, {
  color: 'green',
})
