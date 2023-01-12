import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ModalFrame from './components/ModalFrame';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalEdit from './components/ModalEdit';
import moment from 'moment';

const Singlecard = ({card, cards, setCards, setHistory}) => {
    
  const [openVideo, setOpenVideo] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpen2 = () => setOpenEdit(true);
  const handleClose2 = () => setOpenEdit(false);
  const handleOpen1 = () => setOpenVideo(true);
  const handleClose1 = () => setOpenVideo(false);

  const handleDelete = () => {
    const newList = cards?.filter(item => item.id!=card.id);
    setCards(newList);
  }

  const handleClick = (e) => {
    handleOpen1();
    console.log(e);
    const time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const newItem = {
      ...card,
      time
    }
    setHistory(prev => ([...prev, newItem]));
  }
  
  return ( 
    <>  
    <Card >
      <CardContent style={{cursor: "pointer"}} onClick={handleClick}>
        <Typography variant="h3"  gutterBottom>
          {card.name}
        </Typography>
        <Typography  gutterBottom>
          {card.type}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton onClick={handleOpen2}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      </CardActions>
    </Card>
    <ModalFrame 
    open={openVideo} 
    handleClose={handleClose1} 
    content={card} />
    <ModalEdit 
    open={openEdit} 
    handleClose={handleClose2} 
    content={card}
    cards={cards}
    setCards={setCards}/>
    </> 
  );
}

export default Singlecard