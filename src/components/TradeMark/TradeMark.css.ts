import { style, globalStyle } from '@vanilla-extract/css'

export const TradeMarkContainer = style({
  display: 'flex',
  position: 'absolute',
  bottom: '20px',
  textAlign: 'center',
  fontFamily: 'var(--font-mono)',
  width: '400px',
  color: '#000',
  backgroundColor: 'rgb(255,255,255,0.3)',
  borderRadius: '5px',
  backdropFilter: 'blur(10px)',

  '@media': {
    '(max-width: 750px)': {
      bottom: '10px',
      width: '90%',
    },
  },
})

globalStyle(`${TradeMarkContainer} a`, {
  textDecoration: 'underline',
  color: '#3d63b7',
})
