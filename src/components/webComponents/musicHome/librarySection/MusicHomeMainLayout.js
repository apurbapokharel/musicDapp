import React from 'react';
import './MusicHomeMainLayout.css'
import Sidebar from './Sidebar';
import Body from './LibraryBody';
import AudioController from './AudioController';
import HomeBody from '../homeSection/HomeBody';
import Upload from '../../../contract call/upload'

function TheLibrary(props) {
    // Upload()
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