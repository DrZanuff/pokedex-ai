import { style } from '@vanilla-extract/css'

export const TopPanelContainer = style({
  display: 'flex',
  gap: '10px',
  marginBottom: '15px',
})

export const SmallLightsContainer = style({
  display: 'flex',
  gap: '4px',
})

export const BlueLight = style({
  // background: 'rgb(206,235,255)',
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  border: '3px solid white',
  background:
    'radial-gradient(circle, rgba(131,205,254,1) 0%, rgba(36,36,157,1) 82%)',
})

export const RedSmallLight = style({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  border: '2px solid white',
  background:
    'radial-gradient(circle, rgba(254,131,131,1) 0%, rgba(157,36,36,1) 82%)',
})

export const YellowSmallLight = style({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  border: '2px solid white',
  background:
    'radial-gradient(circle, rgba(248,254,131,1) 0%, rgba(199,184,16,1) 82%)',
})

export const GreenSmallLight = style({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  border: '2px solid white',
  background:
    'radial-gradient(circle, rgba(131,254,150,1) 0%, rgba(16,199,20,1) 82%)',
})
