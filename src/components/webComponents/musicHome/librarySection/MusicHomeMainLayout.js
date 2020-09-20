import React from 'react';
import './MusicHomeMainLayout.css'
import Sidebar from './Sidebar';
import Body from './LibraryBody';
import AudioController from './AudioController';
import HomeBody from '../homeSection/HomeBody';


function TheLibrary(props) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                {/* <Body /> */}
                {/* {
                    props.showHome ?
                        <div> <Body /> </div>
                :
                    <div> <Body /> </div>
                } */}
                <HomeBody />
            </div>
            <div className="footer">
                <AudioController />
            </div>
            
        </div>
    )
}

export default TheLibrary;