import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Icon, Input, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';
import { increaseRevenueFromTip } from '../../API Caller/RESTFetcher';

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2, 2),    
  },
  text: {
    fontSize: 'small',
    fontWeight: 'lighter',
  },
  button: {
    height: 50,
    width: 70,
    position: 'fixed',
    bottom: `10%`,
    left: `35%`
  },
  icon: {
    position: 'fixed',
    top:0,
    right:0,
  }
}));

function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  
  
  useEffect(() => {
    const resetOpenStatus = async() => {
      setOpen(true)
    };
    resetOpenStatus();
    setAddress(props.id);
    console.log('current account is ', props.currentAccount);
  }, [props.name])

  const handleClose = () => {  
    setOpen(false);    
  };

  const body = (
    <form style={modalStyle} className={classes.paper} onSubmit={(event) => {
        event.preventDefault();
        props.contractAddress.methods.musicTip(props.id, props.musicIdentifier, price*10**10).send({ from : props.currentAccount })
        .on('error', () => {
          window.alert('Error');
        })
        .on('confirmation', async() => {
          await increaseRevenueFromTip({
            "songIdentifier": props.musicIdentifier,
            "tipAmount": price
          })
        })
        handleClose();
      }}>
        <TextField value={price} id="price" label="Price eg 1.2 DAPP" className={classes.text} type="text" onChange={e => setPrice(e.target.value)}  />
        <br/>
        <br/>
        <Button variant="contained" color="default" className={classes.button} startIcon={<CloudUploadIcon /> }  type="submit"> Send </Button>
        &nbsp;
        {/* <Button  variant="contained" color="default" className={classes.buttonn} startIcon={<CancelIcon /> } onClick={handleClose} type="button">  </Button> */}
        <CancelIcon className={classes.icon} onClick={handleClose} />

      </form>
  );

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal;