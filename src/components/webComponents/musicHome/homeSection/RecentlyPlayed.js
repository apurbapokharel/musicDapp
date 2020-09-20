import React from 'react';
import {Grid, Typography, CssBaseline, makeStyles, Container } from '@material-ui/core';
import SampleCard from '../../landingPage/SampleCard';

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

const cards = [1, 2, 3, 4];

function RecentlyPlayed() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
            <Typography variant="h4" align="left" color="textinherit" gutterBottom style={{marginBottom:"0px",
                                                    marginTop:"-40px",marginBottom:"20px", fontFamily:"Poppins", color:"rgb(6,253,68)"}}>
              <h1 style={{fontSize:"1.1rem"}}>Recently Played</h1>
            </Typography>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item xs={12} sm={4} md={3}>
                <SampleCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
export default RecentlyPlayed;