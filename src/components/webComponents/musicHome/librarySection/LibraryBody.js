import React from 'react'
import './LibraryBody.css';
import Header from './Header';
import PlayCicleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SortIcon from '@material-ui/icons/Sort';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Tooltip } from '@material-ui/core';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow'
// import Playlist from './Playlist';
import { useContext } from 'react';
import playerContext from '../../../../context/playerContext';
import { useSelector } from 'react-redux';


function Body() {
    const { SetCurrent, currentSong, songs } = useContext(playerContext)
    const musics = useSelector(state => state.musics)
    const musicContract = useSelector(state => state.musicContract)
    const currentAccount = useSelector(state => state.currentAccount)

    return (
        <>
            <Header />
        </>
    )
}

export default Body;
