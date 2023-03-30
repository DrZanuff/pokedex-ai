import { style } from '@vanilla-extract/css'

export const PokemonDescriptionContainer = style({
  display: 'flex',
  gap: '10px',
  marginTop: '10px',

  '@media': {
    '(max-width: 750px)': {
      flexDirection: 'column',
      padding: '0px 30px',
    },
  },
})
