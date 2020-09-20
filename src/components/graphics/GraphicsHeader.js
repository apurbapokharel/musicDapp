import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function PlayerHeader() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <header>
      <h3>Now Playing: {songs[currentSong][0]}</h3>
    </header>
  )
}

export default PlayerHeader