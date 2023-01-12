import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ModalFrame = ({ open, handleClose, content }) => {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {content.name}
          </Typography>
          <iframe src={content.link} width="100%" height="300" style={{border:"1px solid black;", marginTop: "1rem"}}></iframe>
        </Box>
      </Modal>
  )
}

export default ModalFrame;