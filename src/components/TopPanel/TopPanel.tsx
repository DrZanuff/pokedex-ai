import * as S from './TopPanel.css'

export function TopPanel() {
  return (
    <div className={S.TopPanelContainer}>
      <div className={S.BlueLight} />
      <div className={S.SmallLightsContainer}>
        <div className={S.RedSmallLight} />
        <div className={S.YellowSmallLight} />
        <div className={S.GreenSmallLight} />
      </div>
    </div>
  )
}
