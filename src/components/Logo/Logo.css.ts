import { style, keyframes } from '@vanilla-extract/css'

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
})
