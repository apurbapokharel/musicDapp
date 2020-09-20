import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  textfield:{
    padding: "4px",
    display:"flex"

  },
  button:{
    maxWidth:"250px",
  }
}));

export default function OwnersDetail() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customize your music contract:
      </Typography>
      <Grid container>
        <Grid item sm={9} xs={12}  className={classes.textfield}>
          <TextField label=" Producers Public Key" fullWidth autoComplete={false} />
        </Grid>
        <Grid item sm={3} xs={12} className={classes.textfield}>
          <TextField label="Revenue %" fullWidth autoComplete={false}  type="number" />
        </Grid>
        <Grid item sm={9} xs={12}  className={classes.textfield}>
          <TextField label="Writer Public Key" fullWidth autoComplete={false} />
        </Grid>
        <Grid item sm={3} xs={12} className={classes.textfield}>
          <TextField label="Revenue %" fullWidth autoComplete={false}  type="number" />
        </Grid>
        <Grid item sm={9} xs={12}  className={classes.textfield}>
          <TextField label="Composer Public Key" fullWidth autoComplete={false} />
        </Grid>
        <Grid item sm={3} xs={12} className={classes.textfield}>
          <TextField label="Revenue %" fullWidth autoComplete={false}  type="number" />
        </Grid>
        <Grid item sm={6} xs={12} className={classes.textfield}>
          <Button color="secondary" className={classes.button} variant="contained" >Add Collaborators</Button>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.textfield}>
          <Button color="secondary" className={classes.button}>Remove Collaborators</Button>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
