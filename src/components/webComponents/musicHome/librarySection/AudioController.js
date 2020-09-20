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
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd
    } = useContext(playerContext)

    const audio = useRef('audio_tag');

    // self state
    const [statevolum, setStateVolum] = useState(0.3)
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
    
    // const { dispatch, initialState } = currentSong;

    useEffect(() => {
        audio.current.volume = statevolum;
        if (playing) { toggleAudio() }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            src={songs[currentSong][2]}
        />
        
        <Grid item xs={3} className="footer__left">
        <img 
            className="footer__albumLogo"
            src="https://i.pinimg.com/236x/27/7c/15/277c15409a7b07da1c169933e7692828--taylor-swift-curls-pictures-of-taylor-swift.jpg"
            alt=""
        />
        <div className="footer__songInfo">
            <h4>{songs[currentSong][0]}</h4>
            <p>{songs[currentSong][1]}</p>
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
                <span>{fmtMSS(dur)}</span>
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
