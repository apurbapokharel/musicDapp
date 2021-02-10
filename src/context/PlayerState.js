import React, { useReducer } from 'react';
import playerContext from './playerContext';
import playerReducer from './playerReducer';
import { songsArr } from './songs';

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_CURRENT_SONGG,
  SET_CURRENT_ARTIST,
  SET_SONG_SRC,
  SET_SONG_IMAGE_URL
} from './types'

const PlayerState = props => {
  const initialState = {
    currentSong: 0,
    songs: songsArr,
    repeat: false,
    random: false,
    playing: false,
    audio: null,
    currentSongg: '---',
    currentArtist: '---',
    songSrc: null,
    songImageURL: null
  }
  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set playing state
  const togglePlaying = () => dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })

  // Set current song
  const SetCurrent = id => {
    dispatch({ type: SET_CURRENT_SONG, data: id })
  }

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songs.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }
  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songs.length - 1) {
      SetCurrent(0)
    } else {
      SetCurrent(state.currentSong + 1)
    }
  }

  // Repeat and Random
  const toggleRepeat = (id) => dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = (id) => dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })


  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({ type: SET_CURRENT_SONG, data: ~~(Math.random() * state.songs.length) })
    } else {
      if (state.repeat) {
        nextSong()
      } else if ((state.currentSong === state.songs.length - 1)) {
        return
      } else {
        nextSong();
      }
    }
  }

  //set current song
  const setCurrentSong = songName => {
    dispatch({ type: SET_CURRENT_SONGG, data: songName })
  }

  //set current artist
  const setCurrentArtist= artistName => dispatch({ type: SET_CURRENT_ARTIST, data: artistName })

  //set song source
  const setSongSource = byteArray => dispatch({ type: SET_SONG_SRC, data: byteArray})

  //set song image url
  const setCurrentSongImageURL = url => {
    dispatch({ type: SET_SONG_IMAGE_URL, data: url })
  }
  return <playerContext.Provider
    value={{ 
      currentSong: state.currentSong,
      songs: state.songs,
      repeat: state.repeat,
      random: state.random,
      playing: state.playing,
      audio: state.audio,
      songName: state.currentSongg,
      artistName: state.currentArtist,
      songSrc: state.songSrc,
      songURL: state.songImageURL,
      nextSong,
      prevSong,
      SetCurrent,
      toggleRandom,
      toggleRepeat,
      togglePlaying,
      handleEnd,
      setCurrentSong,
      setCurrentArtist,
      setSongSource,
      setCurrentSongImageURL
    }}>

    {props.children}

  </playerContext.Provider>
}

export default PlayerState;