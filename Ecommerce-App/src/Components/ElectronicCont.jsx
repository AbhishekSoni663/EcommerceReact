import React, { useContext, useEffect } from "react";
import ElectronicContext from "../Context3/ElectronicContext";
import { getElectronic } from "../Context3/ElectronicAction";
import ElectronicCard from "./ElectronicCard";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ElectronicCarousel from "../Carousel/ElectronicCarousel";
import SecondNavbar from "./SecondNavbar";

const ElectronicCont = () => {
  const { electronics, dispatch } = useContext(ElectronicContext);

  const getData = () => {
    const data = getElectronic();
    dispatch({
      type: "ELECTRONIC",
      payload: electronics
    });
  };
  // useEffect(()=>{
  //     getData()
  // },[])
  return (
    <>
      <ElectronicCarousel/>
      <SecondNavbar/>
    <ThemeProvider
    theme={createTheme({
      breakpoints: {
        values: {
          laptop: 1024,
          tablet: 800,
          mobile: 400,
          desktop: 1280,
        },
      },
    })}
  >

    <Grid container gap={1.3} alignItems={'center'} justifyContent={'center'}>
      {electronics.map((electronic) => (
        <ElectronicCard key={electronic.id} electronic={electronic} />
      ))}
    </Grid>
    </ThemeProvider>
    </>
  );
};

export default ElectronicCont;
