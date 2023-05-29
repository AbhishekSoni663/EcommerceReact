import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const ManCard = ({manclothe}) => {
  const { title, price,image,rating,rate} = manclothe;

  return (
    <>
      <Card  sx={{ maxWidth: 330 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="I Phone 9"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={rating.rate} precision={0.5} />
          </Stack>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      
    </>
  );
};

export default ManCard;
