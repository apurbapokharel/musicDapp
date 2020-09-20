import React from 'react';
import GHeader from '../../../graphics/GraphicsHeader'
import Graphics from '../../../graphics/Graphics'
import Playlist from '../../../playlist/Playlist'
// import Actions from '../../../playlist/PlaylistActions'
// import Controls from '../../../Controls'

import PlayerState from '../../../../context/PlayerState'
import AudioController from './AudioController';
import Navbar from '../../landingPage/NayaNavbar';

import './main.css'
import './input.css'

function AudioPlayer() {

  return (
    <PlayerState>
      <div className="main">
        <div className="top">
          <div className="left">
            <Navbar />
            <GHeader />
            <Graphics />
          </div>
          <div className="right">
            {/* <Actions /> */}
            <Playlist />
          </div>
        </div>
        {/* <Controls /> */}
        <br />
        <br />
        <AudioController />
      </div>
    </PlayerState>
  );
}

export default AudioPlayer;