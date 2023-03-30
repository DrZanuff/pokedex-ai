import { style, globalStyle } from '@vanilla-extract/css'

export const PokemonImageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

export const EmpytImageHolder = style({
  display: 'flex',
  width: '160px',
  height: '140px',
  borderRadius: '8px',
  backgroundColor: '#dddfde',
  outline: '3px solid #232323',
  padding: '10px',

  '@media': {
    '(max-width: 750px)': {
      width: '100%',
      height: '150px',
    },
  },
})

globalStyle(`${EmpytImageHolder} span`, {
  backgroundColor: '#232323',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
})

export const ImageContainer = style({
  display: 'flex',
  width: '160px',
  height: '145px',
  borderRadius: '8px',
  backgroundColor: '#dddfde',
  outline: '3px solid #232323',
  padding: '10px',

  '@media': {
    '(max-width: 750px)': {
      width: '100%',
      height: '150px',
    },
  },
})

export const ImageElement = style({
  border: '4px solid #232323',
  backgroundColor: '#dddfde',
  borderRadius: '8px',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})

export const PokemonName = style({
  display: 'flex',
  width: '100%',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px 8px 0px 0px',
  backgroundColor: '#232323',
  color: '#dddfde',
  padding: '4px',
  textAlign: 'center',
  fontFamily: 'var(--font-mono)',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: '12px',
})

export const PokemonID = style({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#232323',
  fontFamily: 'var(--font-mono)',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  top: '45px',
  left: '20px',
  fontSize: '16px',
})
