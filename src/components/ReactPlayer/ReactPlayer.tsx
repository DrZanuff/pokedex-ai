import ReactAudioPlayer from 'react-audio-player'
import * as S from './ReactPlayer.css'
// TODO: use this for better styling https://github.com/lhz516/react-h5-audio-player

export function ReactPlayer() {
  return (
    <div className={S.ReactPlayerContainer}>
      <ReactAudioPlayer
        src="/pokemon-red-blue.ogg"
        autoPlay
        controls
        loop
        controlsList={'nodownload'}
      />
    </div>
  )
}
