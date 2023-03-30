import { style, keyframes, globalStyle } from '@vanilla-extract/css'

const logo = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },

  '50%': {
    transform: 'translateY(5px)',
  },

  '100%': {
    transform: 'ranslateY(0px)',
  },
})

export const LogoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 'calc(50% - 330px)',
  animation: `${logo} 2s ease infinite`,
  zIndex: '2',

  '@media': {
    '(max-width: 750px)': {
      top: '10px',
      right: '20px',
      width: '50%',
      height: 'auto',
      animation: 'none',
    },
  },
})

globalStyle(`${LogoContainer} img`, {
  '@media': {
    '(max-width: 750px)': {
      width: '100%',
    },
  },
})
