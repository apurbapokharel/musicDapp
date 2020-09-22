import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
// import SongRow from './librarySection/SongRow';
import SidebarSongRow from './SidebarSongRow';
import IconButton from "@material-ui/core/IconButton";
// import Playlist from '../playlist/Playlist'
import applogo from '../../../../assets/applogo.png';
import Aux from '../../../hoc/Auxiliary';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import {Grid,Container} from '@material-ui/core';

import { useContext } from 'react'
import playerContext from '../../../../context/playerContext';
import { Link } from 'react-router-dom'

function Sidebar() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         shiftHome: false
    //     }
    // }

    // showHomeHandler = () => {
    //     const doesShowHome = this.state.showHome;
    //     this.setState({ showHome : !doesShowHome});
    // }

    return (
        <Aux>
        
        {/* <MusicHomeMainLayout  /> */}

        <div className="sidebar">
            {/* <img className="sidebar__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFQQDgOVy9n6ikyzSoFjey-JnUI4s6v3WmYb3qA0NfWfEFEAIhfFiynxhrN2vhuzkf3ahbUuX3NzpujqAsQo_SjGm_A3OM7_IG&usqp=CAU&ec=45690272"
                alt=""
            /> */}
               
                {/* <div onClick={() => this.showHomeHandler()}>
                </div> */}
                 <div className="sidebar__logo">
                        <Link to="/" style={{textDecoration:"none"}}>
                            <IconButton  color="inherit" aria-label="menu" className="icon_btn">
                                <img src={applogo} style={{height:"30px", marginRight:"7px"}}/>
                                <p style={{color:"white",fontSize:"22px" ,fontWeight:"bold"}}>MusicCoin</p>
                            </IconButton>
                        </Link> 
                </div>

                <Link to="/musicHome" style={{textDecoration:"none"}}>
                    <SidebarOption Icon={HomeIcon} title="Home" />
                </Link>  

                <Link to="/musicHome/library" style={{textDecoration:"none"}}>
                    <SidebarOption Icon={LibraryMusicIcon} title="Library" />
                </Link> 

                <Link to="/musicHome/library/upload" style={{textDecoration:"none"}}>
                    <SidebarOption Icon={CloudUploadIcon} title="Upload Your Own" />
                </Link> 

                {/* <a href="/musicHome" style={{textDecoration:"none"}}>
                <SidebarOption Icon={HomeIcon} title="Home" />
                </a> */}

                {/* <SidebarOption Icon={SearchIcon} title="Search" /> */}

                {/* <a href="/musicHome/library" style={{textDecoration:"none"}}>
                <SidebarOption Icon={LibraryMusicIcon} title="Library" />
                </a> */}

                {/* <a href="/musicHome/library/upload" style={{textDecoration:"none"}}>
                <SidebarOption Icon={CloudUploadIcon} title="Upload Your Own" />
                </a> */}

                {/* <button onClick={() => this.showHomeHandler()}>
                    Click Me
                </button> */}

                <br />
                <strong className="sidebar__title">
                    PLAYLISTS
                    {/* <PlayForWorkIcon /> */}
                </strong>
                <hr />
                {/* <SidebarSongRow /> */}
            <div className="sidebar__songlist">
                <ul className="loi">
                {
                    songs.map((song, i) =>
                    <li className={'sidebarSongContainer' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { SetCurrent(i); }} >
                        <Grid container className="sidebar__song__row">
                            <MusicNoteIcon className="sidbar__songrow__icon"/>
                            <span className="song" style={{fontSize: "14px"}}>{song[0]}</span>
                        </Grid>
                    </li>
                    )
                }
                </ul>
            </div>
            </div>
        </Aux>
    );
}
export default Sidebar;
