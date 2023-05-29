import React, { useContext, useEffect } from 'react'
import JeweleryCard from './JeweleryCard'
import JeweleryContext from '../Context2/JeweleryContext'
import { getJewelery } from '../Context2/JeweleryAction'
import { Grid } from '@mui/material'
import "../jewelery.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const JeweleryCont = () => {
 const {jewelerys, dispatch} = useContext(JeweleryContext)

 
  const getData = ()=>{
    const data = getJewelery()
    dispatch({
      type : "JEWELERY",
      payload : jewelerys
    })
  }
  // useEffect(()=>{
  //   getData()
  // },[])
  return (
<>
    <ThemeProvider
    theme={createTheme({
      breakpoints: {
        values: {
          laptop: 1024,
          tablet: 768,
          mobile: 400,
          desktop: 1280,
        },
      },
    })}>



    <Grid   container item
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
      style={{ display: "flex" }} justifyContent="center" alignItems="center">
      {
        jewelerys.map((jewelery) => <JeweleryCard key={jewelery.id} jewelery={jewelery}/>)
      }
    </Grid>
     </ThemeProvider>
     </>
  )
}

export default JeweleryCont
