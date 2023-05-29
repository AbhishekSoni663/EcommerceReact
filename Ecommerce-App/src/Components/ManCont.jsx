import React, { useContext, useEffect } from "react";
import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SecondNavbar from "./SecondNavbar";
import ManContext from "../Context4/ManContext";
import { getManCloth } from "../Context4/ManAction";
import ManCard from "./ManCard";

const ManCont = () => {
  const { manclothes, dispatch } = useContext(ManContext);

  const getData = () => {
    const data = getManCloth();
    dispatch({
      type: "MANCLOTH",
      payload: data,
    });
  };
//   useEffect(()=>{
//       getData()
//   },[])
  return (
    <>
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

    <Grid
      container
      padding={"20px"}
      gap={13}
      lg={12}
      xs={12}
      mobile={12}
      desktop={12}
      tablet={12}
      laptop={12}
      md={12}
      sm={12}
      style={{ display: "flex" }} justifyContent="center" alignItems="center"
    >
      {manclothes.map((manclothe) => (
        <ManCard key={manclothe.id} manclothe={manclothe} />
      ))}
    </Grid>
    </ThemeProvider>
    </>
  );
};

export default ManCont;
