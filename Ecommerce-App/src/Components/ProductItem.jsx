import React, { useContext, useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ProContext from '../ProContext/ProContex';
import CartContext from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

// import { getPro } from '../ProContext/ProAction';


const ProductItem = ({ pro}) => {
    const { id, image, title, price, rating, rate } = pro
    const { dispatch } = useContext(ProContext)
    const { dispatch: dispatch1 } = useContext(CartContext)
    const [todo , setTodo] = useState({pro,image,id:crypto.randomUUID(1), title, price})

    
    const handleAdd = (todo) => {
        setTodo({...pro})
     if(pro.id === todo.id){
      alert('Item Is Already in')
     }else{
        dispatch1({
            type: "ADD_CART",
            payload: todo
        })
     }
    }
   

return (
    <div className='cart-section'>
        <img src={image} />
        <div className='cart-title'>
            <h4>{title}</h4>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={rating.rate} precision={0.5} />
            </Stack>
            <span className="cart-detail">
                <span className='cart-price'>
                    <h3>{price}</h3>
                </span>
            </span>
                <button  id="add" className='remove-btn' onClick={() => handleAdd(todo)}>Cart<i class="las la-cart-plus"></i></button>
        </div>
    </div>
)
}

export default ProductItem
