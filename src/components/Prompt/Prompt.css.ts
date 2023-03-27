import { style, globalStyle } from '@vanilla-extract/css'

export const PromptContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

globalStyle(`${PromptContainer} textarea`, {
  backgroundColor: '#232323',
  color: 'white',
  padding: '8px 8px',
  borderRadius: '8px',
  resize: 'none',
})
