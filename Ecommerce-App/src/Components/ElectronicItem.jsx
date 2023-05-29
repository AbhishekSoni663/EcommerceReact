import React, { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ElecContext from "../ElecContext/ElecContext";
import { Box, Rating, Stack, Typography} from "@mui/material";
import CartContext from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ElectronicItem = ({ elec }) => {
  const { title, price, thumbnail, images, rating, description } = elec;

  const { dispatch } = useContext(ElecContext);
  const {dispatch : dispatch1} = useContext(CartContext)
  const [todo , setTodo] = useState({elec,thumbnail,id:crypto.randomUUID(1), title, price,rating,description})

 const handleShare = (todo)=>{
  setTodo({...elec})
  if(elec.id === todo.id){
    alert("Added")
  }else{
    dispatch1({
      type:"ADD_CART",
      payload:todo
    })
  }
  
}
  return (
    <>
          <Grid item sm={12} xs={6} md={4}>
              <img width={"100%"} src={thumbnail} />
          </Grid>
          <Grid item md={1} xs={12} sm={12} style={{ margin: "5px" }}>
            <Box sx={{ marginBottom: "5px" }}>
              <img src={images[0]} width={"100%"} />
            </Box>
            <Box sx={{ marginBottom: "5px" }}>
              <img src={images[1]} width={"100%"} height={"110px"} />
            </Box>
            <Box sx={{ marginBottom: "5px" }}>
              <img src={images[2]} width={"100%"} height={"110px"} />
            </Box>
            <Box sx={{ marginBottom: "5px" }}>
              <img src={images[3]} width={"100%"} height={"110px"} />
            </Box>
          </Grid>
          <Box padding={'10px'} minWidth={'100%'} sx={{display:'flex',flexDirection:"column",justifyContent:'center',alignItem:"center"}}>
            <Grid item xs={12} sm={12} md={11}  sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Box padding='15px'>{title}</Box>
            </Grid>
            <Grid item xs={12} md={11} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Box >{description}</Box>
            </Grid>
            <Grid item xs={12} sm={12} md={10}  sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Stack  spacing={2} display={"flex"}>
                <Typography style={{'fontSize':'20px', 'display':'flex', 'alignItems':'center', 'justifyContent':'center' }} >{rating}  <Rating style={{'marginLeft':'10px'}} alignItems={'center'} name="size-small" defaultValue={rating}/></Typography>
                </Stack>
            </Grid>
            <Grid item xs={2} md={11}  sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Typography>{price}</Typography>
            </Grid>
            <Grid
              sm={12}
            //   md={3}
              xs={12}
              display={"grid"}
            //   alignItems={"center"}
              justifyContent={"center"}
            >
              <Item> 
                <Button width='120px' onClick={() => handleShare(todo)}>
                  Share
                </Button>
              </Item>
            </Grid>
            </Box>
    </>
  );
};

export default ElectronicItem;
