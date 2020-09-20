import React from 'react';
import {Grid, Typography, CssBaseline, makeStyles, Container} from '@material-ui/core';
import { connect } from 'react-redux';
import SongCard from '../../songCard/SongCard';
import SortIcon from '@material-ui/icons/Sort';
import './AllSong.css';
// import * as actionTypes from '../../../../store/actions';
import NewUploadForm from '../../upload/NewUploadForm';

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

// const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function AllSongs(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{marginTop:"40px"}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}

          <Grid container className="allSong__sort">
          <Grid item sm={10} >
            <Typography variant="h4" align="left" color="textinherit" gutterBottom style={{fontFamily:"Poppins"}}>
            <h1 style={{fontSize:"1.1rem"}}>All Songs</h1>
            </Typography>
          </Grid>
          <Grid item sm={2} className="sortIcon__style">
            <SortIcon />
          </Grid>
          </Grid>

        {/* <Grid container spacing={4}>
            {cards.map(card => (
            <Grid item key={card} xs={12} sm={4} md={3}>
                <SongCard />
            </Grid>
            ))}
        </Grid> */}
        {/* <NewUploadForm songAdded={this.props.onAddedSong} /> */}
        <Grid container spacing={4}>
          {props.sgs.map(song => (
            <Grid item xs={12} sm={4} md={3}>
            <SongCard 
              key={song.id}
              songTitle={song.songTitle}
              singerName={song.singerName}
            />
            </Grid>
          ))}
        </Grid>

        <Grid container >
            <NewUploadForm songAdded={props.onAddedSong}/>
        </Grid>

        </Container>
    </main>
    </React.Fragment>
);
}

const mapStateToProps = state => {
  return {
    sgs : state.songs
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddedSong: (songTitle, singerName, singerRevPercent) => dispatch ({
//       type:'ADD_SONG', songData: {songTitle: songTitle, singerName: singerName, singerRevPercent: singerRevPercent}
//     })
//   }
// }

export default connect(mapStateToProps)(AllSongs);