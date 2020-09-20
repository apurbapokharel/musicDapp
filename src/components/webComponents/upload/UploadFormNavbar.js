import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import musiclibrarylogo from '../../../assets/musiclibrarylogo.png';
import applogo from '../../../assets/applogo.png';

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

function UploadFormNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" style={{height:"70px"}}>
        <Toolbar>
            <a href="/">
                <Tooltip title="home">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={applogo} style={{height:"35px"}}/>
            {/* <MenuIcon /> */}
          </IconButton>
          </Tooltip>
          </a>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <a href="/musicHome">
            <Tooltip title="library">
          <IconButton  color="inherit" aria-label="menu" className="icon_btn" style={{marginRight:"10px"}}>
            <img src={musiclibrarylogo} style={{height:"35px"}}/>
            </IconButton>
            </Tooltip>
          </a>
          <a href="/profile">
              <Tooltip title="Your profile">
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="https://images.unsplash.com/photo-1582917610428-ae4bade2f3cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="My Avatar" />
              </IconButton>
              </Tooltip>
              </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default UploadFormNavbar;