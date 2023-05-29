import React, { useContext,useState } from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ElecContext from "../ElecContext/ElecContext";
import { CardActions, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ElectronicContext from "../Context3/ElectronicContext";



const ElectronicCard = ({ electronic }) => {
  const {id, title, price, thumbnail,rating, description } = electronic;
const{dispatch} = useContext(ElecContext)
  const navigate = useNavigate()
    
  const navigateElectronic = (id) => {
      navigate('/electronicpages');
      dispatch({
          type: "ADD_ELEC",
          payload: electronic
      })
    
  }

  return (
    <>
    <Grid item md={2}>
      <Card sx={{ maxWidth: 330 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={thumbnail}
          title="I Phone 9"
        />
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
            <Rating name="half-rating" defaultValue={rating} precision={0.5} />
          </Stack>
        </CardContent>
        <CardActions> <Button size="small" onClick={()=>navigateElectronic(electronic)}>Learn More</Button></CardActions>
      </Card>
      </Grid>
    </>
  );
};

export default ElectronicCard;
