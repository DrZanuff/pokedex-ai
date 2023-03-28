import { style, globalStyle, keyframes } from '@vanilla-extract/css'

const show = keyframes({
  '0%': { opacity: '0' },
  '5%': { opacity: '1' },
  '90%': { opacity: '1' },
  '100%': { opacity: '0' },
})

export const FeedbackContainer = style({
  display: 'flex',
  position: 'absolute',
  pointerEvents: 'none',
})

export const FeedbackBox = style({
  display: 'flex',
  position: 'relative',
  padding: '10px',
  border: '4px solid #232323',
  backgroundColor: '#dedede',
  borderRadius: '6px',
  color: '#232323',
  top: '-75px',
  left: '50px',
  width: '320px',
  height: '80px',
  opacity: '0',
  animation: `${show} 6s`,

  ':after': {
    content: '',
    width: '10px',
    height: '10px',
    backgroundColor: '#dedede',
    borderBottom: '4px solid #232323',
    borderRight: '4px solid #232323',
    transform: 'rotate(45deg)',
    position: 'relative',
    top: '100%',
    marginTop: '6px',
  },
})

globalStyle(`${FeedbackBox} span`, {
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  position: 'absolute',
  display: 'flex',
  placeItems: 'center',
  textAlign: 'center',
})
