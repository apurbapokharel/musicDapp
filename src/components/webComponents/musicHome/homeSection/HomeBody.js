import React, { Component } from 'react';
import RecentlyPlayed from './RecentlyPlayed';
import Header from '../librarySection/Header';
import './HomeBody.css';
import LatestUpload from './LatestUploads';
import AllSongs from './AllSongs';

class HomeBody extends Component {
    render() {
        return (
            <div className="home__body">
                <Header />
                <div>
                    <RecentlyPlayed />
                    <LatestUpload />
                    {/* <AllSongs /> */}
                </div>
            </div>
        )
    }
}
export default HomeBody;