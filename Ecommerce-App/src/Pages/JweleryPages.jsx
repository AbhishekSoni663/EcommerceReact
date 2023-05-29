import React, { useContext } from 'react'
import JwelContext from '../JwelContext/JwelContext'
import JweleryItem from '../Components/JweleryItem'
import '../jewelery.css'
const JweleryPages = () => {
    const {jwel} = useContext(JwelContext)
  return (
    <>
    <div className='jwel-container'>
    <div className='jwel-main'>
     {
        jwel.map(jwel=><JweleryItem key={jwel.id} jwel={jwel}/>)
     }
    </div>
    </div>
    </>
  )
}

export default JweleryPages
