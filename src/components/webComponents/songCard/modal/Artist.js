import React from 'react'
import { Grid, Typography, Button } from "@material-ui/core";
import './Artist.css';

function Artist() {
    return (
        // <div>
            <Grid container className="artistContainer">
            <Grid item xs={12} sm={4} className="artistContainer__left">
                {/* <div > */}
                    <img src="https://i.pinimg.com/originals/bc/8c/37/bc8c375f43fe97c0cb43818ebe3436bb.jpg" alt="" />
                <button className="tipButton">Tip Artist</button>
                {/* </div> */}
                
            </Grid>

            <Grid item xs={12} sm={8} >
            <div className="songContainer__right" >

                <Typography align="center" color="textPrimary" gutterBottom>
                    <h3>Sagar Khatri</h3>
                </Typography>
                <Typography align="center" color="textPrimary" gutterBottom>
                    <h5>fn4994j9fn3i03ve33fgfw@faf$Ff#vffafnuv489fn3y7u9ffpothf</h5>
                </Typography>
                <Typography align="center" color="textPrimary" gutterBottom>
                    <h4>Singer / Writer / Producer</h4>
                </Typography>
            </div>
            </Grid>
        </Grid>
        // </div>
    )
}

export default Artist;
