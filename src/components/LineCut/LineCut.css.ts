import { style } from '@vanilla-extract/css'

export const LineCutContainer = style({
  display: 'flex',
  height: '30px',
  position: 'relative',
  // left: '-15px',
})

export const SessionOne = style({
  flex: 0.3,
  height: '15px',
  borderBottom: '4px solid #88071a',
  borderRight: '4px solid #88071a',
  borderBottomRightRadius: '15px',
  marginTop: 'auto',
})

export const SessionTwo = style({
  flex: 1,
  height: '15px',
  borderTop: '4px solid #88071a',
  borderLeft: '4px solid #88071a',
  borderTopLeftRadius: '15px',
  position: 'relative',
  left: '-4px',
})
