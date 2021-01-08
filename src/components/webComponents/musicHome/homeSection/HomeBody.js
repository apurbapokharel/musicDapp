import React, { useState } from 'react'
import RecentlyPlayed from './RecentlyPlayed';
import Header from '../librarySection/Header';
import './HomeBody.css';
import LatestUpload from './LatestUploads';
import AllSongs from './AllSongs';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from 'react-redux';
import { searchSong } from '../../../API Caller/RESTFetcher';
import SampleCard from '../../landingPage/SampleCard';
import {Grid, Typography, CssBaseline, makeStyles, Container } from '@material-ui/core';


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

function HomeBody()  {
    const classes = useStyles();
    const musicContract = useSelector(state => state.musicContract)
    const currentAccount = useSelector(state => state.currentAccount)
    const[searchItem, setSearchItem] = useState('')
    const[searchStatus, setSearchStatus] = useState(false)
    const[searchResult, setSearchResult] = useState()

        return (
            <div className="home__body">
                <div className="header">
                    <div className="header__left">
                        <SearchIcon />
                        <form onSubmit={async(event) => {
                            event.preventDefault()
                            if(searchItem == ''){
                                setSearchStatus(false)
                            }
                            else{
                                await searchSong({
                                    'searchItem': searchItem
                                })
                                .then((result) => {
                                    setSearchResult(result)
                                    setSearchStatus(true)
                                    console.log('success', result)
                                  })
                                  .catch((bool) => {
                                    setSearchResult(bool)
                                    setSearchStatus(true)
                                    console.log('fail', bool)
                                  })
                            }
                        }}>
                            <input 
                            type="text"
                            placeholder="search song or artist"
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)}  
                            />
                        </form>
                    
                    </div>
                    <div className="header__right">
                        {/* <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQElkWA44urLoqZh1_hjDV9ES3XJyusvP52Iw&usqp=CAU" alt="RQ" /> */}
                        <h4>{currentAccount}</h4>
                    </div>
                </div>

                {!searchStatus 
                ?
                <div>
                    <RecentlyPlayed />
                    <LatestUpload />
                    {/* <AllSongs /> */}
                </div>
                :
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
                            <h1 style={{fontSize:"1.1rem"}}>Search Result</h1>
                        </Typography>
                        <Grid container spacing={4}>
                        {!searchResult 
                        ? 
                        <Typography variant="h4" align="left" color="textinherit" gutterBottom style={{marginBottom:"0px",
                                                marginTop:"-10px",marginBottom:"20px", marginLeft:"20px", fontFamily:"Poppins", color:"rgb(6,253,68)"}}>
                            <h2 style={{fontSize:"1.1rem"}}>Not Found</h2>
                        </Typography>
                        :
                        searchResult.map((data, key) => (
                            <Grid item xs={12} sm={4} md={3}>
                            <SampleCard 
                                music={data}
                                contractAddress={musicContract}
                                currentAccount={currentAccount}
                            />
                            </Grid>
                        ))
                        }
                        {}
                        </Grid>
                    </Container>
                    </main>
                </React.Fragment>
                }
               
            </div>
        )
}
export default HomeBody;