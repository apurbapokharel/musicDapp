import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import './mycard.css'
class MyCard extends Component {
    render() {
        return (
            <div class="myCard__container">
                <div class="hovercard">
                    <div class="face face1">
                    <div class="box">
                    <div class="icon"><i class="fa fa-play-circle-o" aria-hidden="true"></i></div>
                    <div class="content">
                        <h3>Jomsomai Bazarma</h3>
                        <h4>Song by Nepathya</h4>
                        <h4>Album : Karaoke-1</h4>
                        <p>12,037 strems</p>
                        <div>
                        <Tooltip title="download">
                        <a href="#"><i class="fa fa-cloud-download" aria-hidden="true"></i></a>
                        </Tooltip>
                        <a href="#">Explore</a>
                        <Tooltip title="add to favorite">
                        <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                        </Tooltip>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="face face2">
                        <h2>Jomsomai Bazarma</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCard;
