import { style } from '@vanilla-extract/css'

export const PokedexContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  width: '450px',
  backgroundColor: '#dc0a2d',
  borderRadius: '8px',
  boxShadow: '0px 6px 0px 1px #88071a',
  border: '4px solid #88071a',
  padding: '15px',
  position: 'absolute',
  top: 'calc(50% - 180px)',

  '@media': {
    '(max-width: 750px)': {
      top: '0px',
      height: '100%',
      width: '100%',
      borderRadius: '0px',
    },
    '(max-width: 380px)': {
      gap: '0px',
    },
  },
})
