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
  border: '10px solid #dedede',
  boxShadow: ' 0px 0px 0px 2px #000000',
  marginTop: '10px',
  outline: 'none',
})

globalStyle(`${PromptContainer} button`, {
  backgroundColor: '#52ae5f',
  color: 'black',
  padding: '4px 4px',
  borderRadius: '6px',
  border: '2px solid #2c3116',
  outline: 'none',
  fontFamily: 'var(--font-mono)',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})

globalStyle(`${PromptContainer} button:hover`, {
  backgroundColor: '#42974e',
  cursor: 'pointer',
})

globalStyle(`${PromptContainer} button:disabled`, {
  backgroundColor: '#52ae5f',
  color: '#a0bca4',
  cursor: 'not-allowed',
})
