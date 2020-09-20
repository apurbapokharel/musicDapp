import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
    { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
    { name: 'Product 3', desc: 'Something else', price: '$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
    { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Summary:
            </Typography>
            <List disablePadding>
                    <ListItem className={classes.listItem} >
                        <ListItemText primary="Californication" secondary="Album: Red Hot Chillies"/>
                        <Typography variant="body2" className={classes.total}> 20 Coin</Typography>
                    </ListItem>
                <ListItem className={classes.listItem} >
                        <ListItemText secondary="Per Streams" />
                        <Typography variant="body2" className={classes.total}>2 Coin</Typography>
                    </ListItem>
            </List>
            <Typography variant="body1" gutterBottom className={classes.title}>
                Collaborators:
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={10} sm={9}>
                    <Typography gutterBottom>Producers: Ram Krishna Dhakal </Typography>
                </Grid>
                <Grid item xs={2} sm={3} >
                    <Typography gutterBottom>5%</Typography>
                </Grid>
                <Grid item xs={10} sm={9}>
                    <Typography gutterBottom>Writer: Sita Dhakal </Typography>
                </Grid>
                <Grid item xs={2} sm={3} >
                    <Typography gutterBottom>20%</Typography>
                </Grid>
                <Grid item xs={10} sm={9}>
                    <Typography gutterBottom>Composer: Hari Das </Typography>
                </Grid>
                <Grid item xs={2} sm={3} >
                    <Typography gutterBottom>10%</Typography>
                </Grid>
                <Grid item xs={10} sm={9}>
                    <Typography gutterBottom>Artist: Jeetu Shrestha </Typography>
                </Grid>
                <Grid item xs={2} sm={3} >
                    <Typography gutterBottom>65%</Typography>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}
