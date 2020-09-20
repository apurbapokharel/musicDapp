import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const price = "20";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SongDetail() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    individual: false,
    albumsong: false,
    album: ""
  });
  const { individual, albumsong } = state;
  // const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });

    if (state.individual && name === "albumsong") {
      setState({ ...state, ["individual"]: false });
    } else if (state.albumsong && name === "individual") {
      setState({ ...state, ["albumsong"]: false });
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Songs Details:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="Song Title"
            fullWidth
            autoComplete="title"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Song Description (max 200)"
            fullWidth
            autoComplete="description"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            label="Song Price Per Download:"
            name="Price"
            fullWidth
            type="number"
            autoComplete="price"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            label="Song Price Per Streams:"
            name="Price"
            fullWidth
            type="number"
            autoComplete="price"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography fullWidth>{"= $" + price}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography fullWidth>{"= $" + 2}</Typography>
        </Grid>
        <Grid item sm={12} xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={individual}
                onChange={handleChange("individual")}
                value="individual"
              />
            }
            label="Individual Song"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={albumsong}
                onChange={handleChange("albumsong")}
                value="albumsong"
              />
            }
            label="Album Song"
          />
        </Grid>
        {albumsong && (
          <Grid item sm={6} xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Album
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange("album")}
                // labelWidth={labelWidth}
                inputProps={{
                  name: "album"
                }}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
        )}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
