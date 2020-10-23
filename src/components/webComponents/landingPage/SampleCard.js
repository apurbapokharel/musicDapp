import React, { Component } from 'react'
import './sampleCard.css';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import QueueIcon from '@material-ui/icons/Queue';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TimerIcon from '@material-ui/icons/Timer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Grid, Tooltip } from '@material-ui/core';
import Modal from './Modal';
import Aux from '../../hoc/Auxiliary';
import GroupAvatars from '../songCard/AvatarGroup';
import ReactDOM from 'react-dom'

class SongCard extends Component {
        state = {
          showMe: false
        }
    clickHandler = () => {
        const doesShow = this.state.showMe;
        this.setState({showMe : !doesShow});
    }

    modalCancelHandler = () => {
        this.setState({showMe: false});
    }

    renderModal = () => {
        ReactDOM.render(<Modal 
            name={this.props.music.musicName} 
            id={this.props.music.id} 
        />, document.getElementById("modal"))
    }
    render(){
        console.log("props", this.props.music);
        return (
        <Aux>
        <div className="sample__game" key="item.key">

        <div className="sampleCard__rank">
            <FavoriteBorderIcon />
        </div>

        <div className="sample__front">
            {/* <img className="sample__thumbnail" src="https://apurbapokharel-team-bucket.storage.fleek.co/my-folder/Enter%20SandmanMetallica/image" alt="" /> */}
            <img className="sample__thumbnail" src="https://i.pinimg.com/originals/bc/8c/37/bc8c375f43fe97c0cb43818ebe3436bb.jpg" alt="" />

            <h3 className="sample__name">{this.props.music.musicName}</h3>
            {/* <h3 className="sample__name"> Beaten Path </h3> */}
            {/* <h3 className="sample__name">{this.props.title}</h3> */}
            <Grid container className="sample__stats__streamers">
                <Grid item xs={8} className="sample__stats">
                    <p>{this.props.music.artistName}</p>
                    {/* <p>Taylor Swift</p> */}

                </Grid>
               
            </Grid>
        </div>
        <div className="sample__back">
            <div className="sample__streaming__info">
                <p className="sample__game__stat">89.5k<span>Streams</span></p>
                <p className="sample__game__stat">21.7k<span>Downloads</span></p>
            </div>

            <button 
                className="sample__btn"
                onClick={() => this.clickHandler()}
            >
                View Song Details
            </button>

            <div className="sample__streamer">
                <div className="sample__card__streamer1">
                <Tooltip title="download">
                    <CloudDownloadIcon />
                </Tooltip>
                </div>               
                <div className="sample__card__streamer2">
                <Tooltip title="play">
                    <PlayCircleFilledWhiteIcon />
                </Tooltip>
                </div> 
                <div className="sample__card__streamer2">
                <Tooltip title="add to favourite">
                    <FavoriteIcon />
                </Tooltip>
                </div>                
                <div className="sample__card__streamer1">
                <Tooltip title="add to queue">
                    <QueueIcon />
                </Tooltip>
                </div>
                <div className="sample__card__streamer1">
                <Tooltip title="tip artist" onClick={() => this.renderModal()}>
                    <MonetizationOnIcon />
                </Tooltip>
                </div>

            </div>
        </div>
        <div id="modal"></div>
        <div className="sample__back__background">
        </div>
    </div>
    </Aux>
)
}
}
export default SongCard;