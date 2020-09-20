import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './pageFooter.css';

const useStyles = makeStyles(theme => ({
  root: {
  
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function PageFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="sticky" color="#ff7043" className="footer-text" style={{zIndex:"0"}}>
        <Toolbar>          
        <Typography variant="h">
            Copyright © Team Blockchain
        </Typography>
        </Toolbar>
        </AppBar>
    </div>
  );
}
export default PageFooter;
