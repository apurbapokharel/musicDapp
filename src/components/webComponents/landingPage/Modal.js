import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Input, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CancelIcon from '@material-ui/icons/Cancel';

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
    width: 300,
    height: 250,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2, 2),    
  },
  text: {
    fontSize: 'small',
    fontWeight: 'lighter',
  }
}));

export default function SimpleModal(props) {
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
    setAddress(props.address);
}, [props.address])

  const handleClose = () => {  
    setOpen(false);    
  };

  const body = (
    <form style={modalStyle} className={classes.paper} onSubmit={(event) => {
        event.preventDefault();
        // setDescription('');
        // setTitle('');
        handleClose();
      }}>
        <TextField value={address} id="address" label="String" className={classes.text} type="text" />
        <br/>
        <br/>
        <TextField value={price} id="price" label="Price eg 1.2 DAPP" className={classes.text} type="text" onChange={e => setPrice(e.target.value)}  />
        <br/>
        <br/>
        <Button variant="contained" color="default" className={classes.button} startIcon={<CloudUploadIcon /> }  type="submit"> Upload </Button>
        &nbsp;
        <Button variant="contained" color="default" className={classes.button} startIcon={<CancelIcon /> } onClick={handleClose} type="button"> Cancel </Button>
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