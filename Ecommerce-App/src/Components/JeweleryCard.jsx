import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import JwelContext from "../JwelContext/JwelContext";

const JeweleryCard=({ jewelery})=> {
  const { image, title, price, rating,rate, description } = jewelery;
  const {dispatch} = useContext(JwelContext)

  const navigate = useNavigate()
    
  const navigateProduct = (id) => {
      navigate('/jwelerypage');
      dispatch({
          type: "ADD_JWPRO",
          payload: jewelery
      })
    
  }
return (
    <>
      <Card sx={{ maxWidth: 330 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={rating.rate} precision={0.5} />
          </Stack>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={()=>navigateProduct(jewelery)}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default JeweleryCard