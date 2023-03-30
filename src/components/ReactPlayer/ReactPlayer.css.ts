import { style } from '@vanilla-extract/css'

export const ReactPlayerContainer = style({
  display: 'flex',
  position: 'fixed',
  top: '10px',
  right: '10px',
  zIndex: '3',

  '@media': {
    '(max-width: 750px)': {
      display: 'none',
    },
  },
})
