import React from 'react';
import './Modal.css';
import Backdrop from '../../../backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import { Grid, Typography, Button } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModalAppbar from './ModalAppbar';
import ModalSongDetails from './ModalSongDetails';
import ModalTab from './ModalTab';
import Artist from './Artist';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? '1' : '0'
            }}
        >
            {/* {props.children} */}

            {/* <ModalAppbar /> */}
            <ModalSongDetails />
            <Grid container item xs={12} style={{paddingTop: "20px"}}>
                <ModalTab />
            </Grid>
            {/* <Artist /> */}
        </div>

        </Aux>
)

export default modal;
