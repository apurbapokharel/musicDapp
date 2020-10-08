import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    width: 100,
    padding: theme.spacing(2, 2, 2),    
  },
  text: {
    fontSize: 'small',
    fontWeight: 'lighter',
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const resetOpenStatus = async() => {
       setOpen(true)
    }
    resetOpenStatus()
}, [props.string])

  const handleClose = () => {  
    setOpen(false) 
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.text}>Copied</h2>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={function(){
            setInterval(handleClose,500)
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}