import { Button, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

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

const ModalEdit = ({ open, handleClose, content, cards, setCards }) => {
    const [name, setName] = useState(content.name);
  const [link, setLink] = useState(content.link);
  const [type, setType] = useState(content.type);

  const handleClick = (e) => {
    e.preventDefault();
    const updateCard = {
        ...content,
        name,
        link,
        type
    }
    const newList = cards?.map(item => {
        if(item.id === updateCard.id) return updateCard;
        else return item;
    });
    setCards(newList);
    console.log(updateCard);
    handleClose();
    
  }
  return (
    <Modal
        style={{alignItems: 'center'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form className="form">
      <div className="items">
        <input
          className="input"
          type="text"
          placeholder="Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Add Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Type Of Content</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            label=""
          >
            <MenuItem value="Entertainment">Entertainment Videos</MenuItem>
            <MenuItem value="Education"> Education Videos</MenuItem>
          </Select>
        </FormControl>
        <div >
          <Button
            variant="contained"
            className="additem"
            disabled={name === "" || link === ""}
            onClick={handleClick}
          >
            Update Card
          </Button>
        </div>
      </div>
    </form>
        </Box>
      </Modal>
  )
}

export default ModalEdit;