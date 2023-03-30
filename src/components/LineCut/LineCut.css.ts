import { style } from '@vanilla-extract/css'

export const LineCutContainer = style({
  display: 'flex',
  height: '30px',
  position: 'relative',
  // left: '-15px',

  '@media': {
    '(max-width: 750px)': {
      display: 'none',
    },
  },
})

export const SessionOne = style({
  flex: 0.3,
  height: '15px',
  borderBottom: '4px solid #88071a',
  borderRight: '4px solid #88071a',
  borderBottomRightRadius: '15px',
  marginTop: 'auto',

  ':before': {
    content: '',
    width: '30px',
    borderBottom: '4px solid #88071a',
    position: 'absolute',
    bottom: '0',
    left: '-18px',
  },
})

export const SessionTwo = style({
  flex: 1,
  height: '15px',
  borderTop: '4px solid #88071a',
  borderLeft: '4px solid #88071a',
  borderTopLeftRadius: '15px',
  position: 'relative',
  left: '-4px',

  ':after': {
    content: '',
    width: '30px',
    borderTop: '4px solid #88071a',
    position: 'absolute',
    bottom: '100%',
    right: '-19px',
  },
})
