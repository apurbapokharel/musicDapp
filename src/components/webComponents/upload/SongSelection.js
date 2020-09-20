import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  }
}));
export default function SongSelection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Song Selection:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <input
            accept="music/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Select Music File
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="subtitle1">C://Desktop/Californication.mp3</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Select Art File
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="subtitle1">C://Desktop/Californication.jpg</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
