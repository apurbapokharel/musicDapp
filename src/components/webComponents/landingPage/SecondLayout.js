import React from 'react';
import { Button, CssBaseline, Paper, Grid, Typography, makeStyles} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import { readBuilderProgram } from 'typescript';
// import blue from '@material-ui/core/colors/blue';
// import Home from '../WebComponents/LandingPageComponents/Home';
import './SecondLayout.css'


const useStyles = makeStyles(theme => ({
  root: {
    height: '60vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1578894934390-f83bb626aeb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=693&q=80)',
    // backgroundImage:'url(https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Poppins',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SecondLayout() {
  const classes = useStyles();
//   const color = blue[100];

  return (
    <Grid container component="main" className={classes.root} style={{marginTop:"80px", marginBottom:"80px", backgroundColor:"green"}}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Typography align="center" color="textInherit" gutterBottom>
             <CloudUploadIcon />
        </Typography>
        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
            Very low Fees
         </Typography>
        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
            Get 100% profit
        </Typography>
        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
            Automatic Profit Distribution
        </Typography>
        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
            No Copyright problems
        </Typography>
        <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
            Receive Tips
        </Typography>
        <Typography align="center" gutterBottom>
          <a href="/upload" style={{textDecoration:"none"}}>
        <Button variant="outlined" className="uploadYourOwn__btn">
            Upload Your Own
        </Button>
        </a>
        </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
export default SecondLayout;