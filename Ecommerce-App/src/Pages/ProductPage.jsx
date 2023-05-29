import React, { useContext } from 'react'
import ProductItem from '../Components/ProductItem'
import ProContext from '../ProContext/ProContex'

const ProductPage = () => {
    const {pros}= useContext(ProContext)


  return (
    <div className='pro-container'>
     {
        pros.map((pro)=> <ProductItem key={pro.id} pro={pro} />)
     }
    </div>
  )
}

export default ProductPage
