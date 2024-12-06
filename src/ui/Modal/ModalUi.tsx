import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#eee',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',

};

interface ModalProp{
  open : Boolean | any,
  setOpen : React.Dispatch<React.SetStateAction<Boolean>>,
  children : React.ReactNode
}

const ModalUi:React.FC<ModalProp> = ({open,setOpen,children}:ModalProp) => {

  const handleClose = () => setOpen(false);
  return (
    <div>
   
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {children}
        </Box>
      </Fade>
    </Modal>
  </div>
  )
}

export default ModalUi