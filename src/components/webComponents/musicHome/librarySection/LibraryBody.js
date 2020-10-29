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


function Body() {
    const { SetCurrent, currentSong, songs } = useContext(playerContext)
    return (
        <div className="library__body">
            <Header />

            <div className="library__body__info">
                {/* <img 
                    src="https://i.pinimg.com/236x/27/7c/15/277c15409a7b07da1c169933e7692828--taylor-swift-curls-pictures-of-taylor-swift.jpg"
                    alt=""
                /> */}
                <div className="library__body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Enjoy Your Playlist</h2>
                    <p>Your playlist of favorite music.</p>
                </div>
            </div>

            <div className="library__body__songs">
            <div className="library__body__icons">
                <Tooltip title="Start Playing">
                    <PlayCicleFilledIcon className="library__body__shuffle"/>
                </Tooltip>
                <FavoriteIcon fontSize="large" className="library__bodySong__favIcon"/>
                <CloudDownloadIcon fontSize="large" className="library__bodySong__favIcon"/>
                <Tooltip title="sort by">
                    <SortIcon className="library__bodySong__sortIcon"/>
                </Tooltip>
            </div> 
            {/* List of songs */}
            <ul className="libraryBody__loi">
            {
                songs.map((song, i) =>
                <li className={'librarySongContainer' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { SetCurrent(i); }} >
                    <SongRow
                        className={'sidebarSongContainer' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { SetCurrent(i); }}
                        song={song[0]}
                        singer={song[1]}
                    />
                </li>
                )
            }
            </ul>
            </div>
            {/* <Playlist /> */}
        
        </div>
    )
}

export default Body;
