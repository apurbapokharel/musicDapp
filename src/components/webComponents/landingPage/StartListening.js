import React from 'react';
import { CssBaseline, Typography, makeStyles, Container, Button, Grid, Divider } from '@material-ui/core';
import SampleCard from './SampleCard';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
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

function StartListening() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg" style={{marginTop:"-140px"}}>
          {/* End hero unit */}
          <Typography variant="h4" align="center" color="textinherit" gutterBottom style={{marginBottom:"0px",
                                                    marginTop:"0px", fontFamily:"Poppins"}}>
              <h1 style={{fontSize:"2.2rem"}}>Sample music</h1>
            </Typography>
          {/* <Typography variant="h3" align="center" color="textinherit" gutterBottom style={{marginBottom:"25px",marginTop:"-30px", fontFamily:"Poppins"}}>
              Sample Music
            </Typography> */}
            {/* <Divider
            variant="middle"
            style={{ width: "300px", height: "3px", color: "secondary" }}
          /> */}
            <Divider variant="center" style={{marginTop:"10px", 
              height:"3px", marginBottom:"35px", 
              color:"secondary"}}
            />
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <div style={{marginLeft: "38px", marginTop:"25px"}}>
                  <SampleCard />
                </div>
              </Grid>
            ))}
          </Grid>
          <Typography align="center" color="textinherit" gutterBottom style={{marginTop:"20px", marginBottom:"-25px"}}>
          <Link to='/musicHome' style={{textDecoration:"none"}}>
            <Button variant="contained">
                Discover More
            </Button>
          </Link>  
          {/* <a href="https://metamask.io/" style={{textDecoration:"none"}}>
            <Button variant="contained">
                Discover More
            </Button>
            </a> */}
          </Typography>
        </Container>
      </main>
    </React.Fragment>
  );
}
export default StartListening;