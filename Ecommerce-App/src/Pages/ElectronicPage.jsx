import React, { useContext } from 'react'

import ElectronicItem from '../Components/ElectronicItem'
import ElecContext from '../ElecContext/ElecContext'
import { Grid } from '@mui/material'

const ElectronicPage = () => {
    const{elec} = useContext(ElecContext)
  return (
    <Grid container gap={1} justifyContent={'center'} alignItems={'center'} marginTop={2}>
      {
        elec.map(elec=><ElectronicItem key={elec.id} elec={elec}/>)
      }
    </Grid>
  )
}

export default ElectronicPage
