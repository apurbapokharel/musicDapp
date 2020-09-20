import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './FirstLayout.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
// import ReadMorePage from './ReadMorePage';
import applogo from '../../../assets/applogo.png';

const Styles = theme => ({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0)',
      },
      fabButton: {
        position: 'fixed',
        zIndex: 1,
        bottom: 45,
        // left: 0,
        right: 40,
        // margin: '0 auto',
      },
  });


class FirstLayout extends Component {
    render() {
        const {classes} = this.props;
        return (

                    <Paper className="banner-paper">
                    <div className={classes.overlay} />

                    {/* container means here  */}
                    <Grid container style={{backgroundColor: '#cfe8fc'}} className="banners"> 

                    {/* yo talako Container nahuda nii kei hunna hai guys */}
                    <Grid item xs={12} md={12} className="banner-left">
                        <Box>
                            {/* ONLY AFTER USING THIS BOX justifyContent and alignItems styling worked */}
                        <Typography  align="center" color="textinherit" gutterBottom>
                            {/* <LibraryMusicIcon style={{width:"20px"}}/> */}
                            <img src={applogo} style={{height:"60px"}}/>
                        </Typography>
                        
                        <Typography variant="h3" align="center" color="textinherit" gutterBottom>
                        Music on Blockchain
                        </Typography>
                        <Typography variant="h4" align="center" color="textinherit" gutterBottom>
                        Connecting Artists and Fans directly using Ethereum
                        </Typography>
                        <Typography variant="h5" align="center" color="textinherit" gutterBottom>
                            Listen all new songs with very low cost using 
                            cryptho currency, a digital money
                        </Typography>
                        <Typography variant="h6" align="center" color="textinherit" paragraph>
                            Read more to know how to use this app and for other helps
                        </Typography>
                        <Typography align="center">
                            <a href="/ReadMorePage" style={{textDecoration:"none"}}>
                            <Button variant="outlined"  onClick="./ReadMorePage" className="knowMore__btn">
                                Know More
                            </Button>
                            </a>
                        </Typography>
                        </Box>
                        {/* <Tooltip title="Your playlist">
                        <Fab color="secondary" aria-label="Audio" className={classes.fabButton}>
                            <AudiotrackOutlinedIcon />
                        </Fab>
                        </Tooltip> */}
                        </Grid>
                    </Grid>
                </Paper>
                );
            }
            }
export default withStyles(Styles)(FirstLayout);


