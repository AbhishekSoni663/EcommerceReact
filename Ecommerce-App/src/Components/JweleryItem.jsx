import  React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JwelContext from '../JwelContext/JwelContext';
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';

const JweleryItem =({jwel})=>{
    const {dispatch} = useContext(JwelContext)
    const { title, price,rating, rate,image} = jwel
    const {dispatch : dispatch1} = useContext(CartContext)
    const[todo,setTodo]=useState({title, price,rating, rate,image})

const handleShare = (todo)=>{
  setTodo({...jwel})
  if(jwel.id === todo.id){
    alert("Added")
  }else{
    dispatch1({
      type:"ADD_CART",
      payload:todo
    })
  }
  
}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {rating.rate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>handleShare(todo)}>Share</Button>
      </CardActions>
    </Card>
  );
}
export default JweleryItem