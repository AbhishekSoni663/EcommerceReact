import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../Context/ProductContext'
import { getProduct } from '../Context/ProductAction'

const ProductContainer = () => {
  const { products, dispatch } = useContext(ProductContext)
  const getData =  () => {
    const data =  getProduct()
    dispatch({
      type: "PRODUCT",
      payload: data
    })
  }
  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <div className='container-fluida'>
      <h1 className="all-products">
        All Products
        <br/>
        <iframe src="https://embed.lottiefiles.com/animation/94012"></iframe>
      </h1>
    
      {
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}

export default ProductContainer
