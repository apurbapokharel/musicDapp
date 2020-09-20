import React, { Component } from 'react'
import './SongCard.css';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueIcon from '@material-ui/icons/Queue';
import TimerIcon from '@material-ui/icons/Timer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Grid, Tooltip } from '@material-ui/core';
import GroupAvatars from './AvatarGroup';
import Aux from '../../hoc/Auxiliary';
import Modal from './modal/Modal';
import { FavoriteOutlined } from '@material-ui/icons';

class SongCard extends Component {
    constructor(props){
        super(props);
        this.state = {
          showMe: false
        }
    }
    clickHandler = () => {
        const doesShow = this.state.showMe;
        this.setState({showMe : !doesShow});
    }

    modalCancelHandler = () => {
        this.setState({showMe: false});
    }

    render(){
        return (
        <Aux>
        {/* {
        this.state.showMe ?
        <div><Modal /></div>
        : null
        } */}
        <Modal show={this.state.showMe} modalClosed={this.modalCancelHandler}/>
        <div className="game" key="item.key">

        <div className="rank">
            <FavoriteBorderIcon />
        </div>

        <div className="front">
            <img className="thumbnail" src="https://i.pinimg.com/originals/bc/8c/37/bc8c375f43fe97c0cb43818ebe3436bb.jpg" alt="" />
            {/* <h3 className="name">The Beaten Path</h3> */}
            <h3 className="name">{this.props.songTitle}</h3>
            <Grid container className="stats__streamers">
            <Grid item xs={8} className="stats">
                <TimerIcon className="update__timer"/>
            <p>5 days ago</p>
            </Grid>
            <Grid item xs={4} className="front__avatars">
                {/* <p> 29 days ago</p> */}
                <GroupAvatars className="front__avatars"/>
            </Grid>
            </Grid>
        </div>
        <div className="back">
            <div className="streaming__info">
                <p className="game__stat">89.5k<span>Streams</span></p>
                <p className="game__stat">21.7k<span>Downloads</span></p>
            </div>

            <button 
                className="btn"
                onClick={() => this.clickHandler()}
            >
                View Song Details
            </button>

            <div className="streamer">
                <div className="card__streamer1">
                <Tooltip title="download">
                    <CloudDownloadIcon />
                </Tooltip>
                </div>               
                <div className="card__streamer2">
                <Tooltip title="play">
                    <PlayCircleFilledWhiteIcon />
                </Tooltip>
                </div>    
                <div className="card__streamer1">
                <Tooltip title="add to favourite">
                    <FavoriteIcon />
                </Tooltip>
                </div>            
                <div className="card__streamer1">
                <Tooltip title="play">
                    <QueueIcon />
                </Tooltip>
                </div>

            </div>
        </div>

        <div className="back__background">
        </div>
    </div>
    </Aux>
)
}
}
export default SongCard;