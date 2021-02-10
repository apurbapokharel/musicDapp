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
  
  export default (state, action) => {
    switch (action.type) {
      case SET_CURRENT_SONG:
        return {
          ...state,
          currentSong: action.data,
          playing: true
        }
      case TOGGLE_RANDOM:
        return {
          ...state,
          random: action.data
        }
      case TOGGLE_REPEAT:
        return {
          ...state,
          repeat: action.data
        }
      case TOGGLE_PLAYING:
        return {
          ...state,
          playing: action.data
        }
      case SET_CURRENT_SONGG:
        return {
          ...state,
          currentSongg: action.data
        }
      case SET_CURRENT_ARTIST:
        return {
          ...state,
          currentArtist: action.data
        }
      case SET_SONG_SRC:
        return {
          ...state,
          songSrc: action.data
        }
      case SET_SONG_IMAGE_URL:
        return {
          ...state,
          songImageURL: action.data
        }
      default:
        return state;
    }
  
  }