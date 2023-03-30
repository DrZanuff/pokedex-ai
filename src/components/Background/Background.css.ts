import { style, globalStyle } from '@vanilla-extract/css'

export const BackgroundContainer = style({
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '0',

  '@media': {
    '(max-width: 750px)': {
      display: 'none',
    },
  },
})

globalStyle(`${BackgroundContainer} img`, {
  objectFit: 'cover',
  width: '100%',
  opacity: '0.8',
  // filter: 'blur(2px)',
})
