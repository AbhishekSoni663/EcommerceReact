import React, { useContext  } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import ProContext from '../ProContext/ProContex';
const ProductCard = ({ product }) => {
    const { id, title, price,rating, rate,image } = product
    const { dispatch } = useContext(ProContext)
    const navigate = useNavigate()
    
    const navigateProduct = (id) => {
        navigate('/productpages');
        dispatch({
            type: "ADD_PRO",
            payload: product
        })
      
    }

    
   

    return (
        <div className='product-section'>
            <img src={image} />
            <div className='product-title'>
                <h4>{title}</h4>
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={rating.rate} precision={0.5} />
                </Stack>
                <span className="product-detail">
                    <span className='pro-price'>
                        {price}
                    </span>
                </span>
          
                <button id="add" className="add-cart"  onClick={()=>navigateProduct(product)}>View Products</button>
            </div>
        </div>

    )
}

export default ProductCard
