import React, { useState, useEffect, useRef, useContext } from 'react';
import playerContext from '../../../../context/playerContext';
import './AudioController.css';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider, Button} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function AudioController(props) {
// Global State
const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    songName,
    artistName,
    songSrc,
    songURL,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd
    } = useContext(playerContext)

    const audio = useRef('audio_tag');

    // self state
    const [statevolum, setStateVolum] = useState(0.1)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

    const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

    const handleVolume = (q) => {
        setStateVolum(q);
        audio.current.volume = q;
    }

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audio.current.currentTime = compute
    }
    
    useEffect(() => {
        audio.current.volume = statevolum;
        if (playing) { toggleAudio() }
        console.log('the id is', currentSong);
        console.log('the song stats are', songName, artistName)
    }, [currentSong])

    return (
        <Grid container>
        <audio
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => setDur(e.target.duration)}
            onEnded={handleEnd}
            ref={audio}
            type="audio/mpeg"
            preload='true'
            src={songSrc}
        />
        
        <Grid item xs={3} className="footer__left">
        <img 
            className="footer__albumLogo"
            src={songURL}
            alt=""
        />
        <div className="footer__songInfo">
            <h4>{songName}</h4>
            <p>{artistName}</p>
        </div>
        </Grid>
        <Grid item xs={6} className="footer__center">
            <Grid className="footer__center__left">
                {/* shuffle */}
                <span onClick={toggleRandom} className={"random" + (random ? 'active' : '')}>
                    <ShuffleIcon  className="footer__green" />
                </span>
            
                {/* previous */}
                <SkipPreviousIcon onClick={prevSong} className="footer__icon" />

                {/* play or pause */}
                <span onClick={() => {togglePlaying(); toggleAudio(); }}>
                    <span className={!playing ? '': 'hide'}>
                        <PlayCircleOutlineIcon className="play__footer__icon" />
                        {/* <PlayCircleOutlineIcon fontSize="large" className="footer__icon" /> */}
                    </span>
                    <span className={!playing ? 'hide' : ''}>
                        <PauseIcon className="play__footer__icon"/>
                    </span>
                </span>

                {/* next */}
                <SkipNextIcon onClick={nextSong} className="footer__icon" />

                {/* repeat */}
                <span onClick={toggleRepeat} className={"repeat" + (repeat ? 'active' : '')}>
                    <RepeatIcon className="footer__green" />
                </span>
            </Grid>

            <Grid className="footer__center__right">
                <span >{fmtMSS(currentTime)}</span>
                <input 
                    onChange={handleProgress}
                    value={dur ? (currentTime * 100) / dur : 0}
                    type="range" name="progressBar" id="prgbar"
                    className="muiSlider-root"
                    style={{color:"rgb(6,253,68)", marginLeft:"8px", marginRight:"8px"}}
                />
                <span>
                    { currentSong == 0 ? '0:00' : fmtMSS(dur) }
                </span>
            </Grid>

        </Grid>
        <Grid container spacing={2} item xs={3} className="footer__right">
        {/* <Grid container spacing={4}> */}
            {/* <Grid item>
                <VolumeDownIcon />
            </Grid> */}

            {/* volume slider */}
            {/* <Grid item xs> */}
            <VolumeDownIcon style={{marginRight:"8px"}}/>
                <input 
                    value={Math.round(statevolum * 100)}
                    type="range" name="volBar" id="volBar"
                    onChange={(e) => handleVolume(e.target.value / 100)}
                    className="muiSlider-root"
                />
            {/* </Grid> */}


        {/* </Grid> */}
        </Grid>
    </Grid>
    )
}

export default AudioController;
