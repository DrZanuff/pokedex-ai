import { style, globalStyle } from '@vanilla-extract/css'

export const PokemonStatsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  width: '100%',
})

export const Stat = style({
  display: 'flex',
  width: '100%',
  minHeight: '26.5px',
})

globalStyle(`${Stat} b`, {
  color: '#dedede',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontFamily: 'var(--font-mono)',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  width: '100%',
  backgroundColor: '#232323',
  borderRadius: '5px 0px 0px 5px;',
  display: 'flex',
  justifyContent: 'center',
  padding: '4px',
})

globalStyle(`${Stat} span`, {
  color: '#232323',
  backgroundColor: '#28aafe',
  outline: '2px solid #232323',
  minWidth: '80px',
  padding: '4px 8px 4px 4px',
  borderRadius: '4px',
  marginLeft: 'auto',
  textAlign: 'right',
  fontFamily: 'var(--font-mono)',
  fontWeight: 'bold',
})
