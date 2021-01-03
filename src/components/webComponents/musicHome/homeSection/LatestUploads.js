import React from 'react';
import {Grid, Typography, CssBaseline, makeStyles, Container} from '@material-ui/core';
import SampleCard from '../../landingPage/SampleCard';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    // paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(0),
    // paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1,2];

function LatestUpload() {
  const classes = useStyles();
  const musics = useSelector(state => state.musics);
  const musicContract = useSelector(state => state.musicContract)
  const currentAccount = useSelector(state => state.currentAccount)
  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{marginTop:"40px"}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
            <Typography variant="h4" align="left" color="textinherit" gutterBottom style={{marginBottom:"22px",
                                                    marginTop:"-50px", fontFamily:"Poppins", color:"rgb(6,253,68)"}}>
            <h1 style={{fontSize:"1.1rem"}}>Latest Upload on MusiCoin</h1>
            </Typography>
        <Grid container spacing={4}>
          {cards.map((card, key) => (
            <Grid item xs={12} sm={4} md={3}>
              <SampleCard 
                music={musics[key]}
                contractAddress={musicContract}
                currentAccount={currentAccount}
              />
            </Grid>
            ))}
        </Grid>
        </Container>
    </main>
    </React.Fragment>
);
}
export default LatestUpload;