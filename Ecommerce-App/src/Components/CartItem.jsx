import React, { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import '../Components/CartItem.css'
import { useState } from "react";
const CartItem = ({ cart}) => {
  const { id, image, title, price, rating ,rate, thumbnail} = cart;

  const { dispatch: dispatch1 } = useContext(CartContext);
  const handleRemove = (id) => {
    dispatch1({
      type: "REMOVE",
      payload: id
    });
  };

  const [quantity, setQuantity] = useState(1);
  const [mprice , setMprice] = useState(price)
  const increaseQua = () => {
    setQuantity(quantity + 1)
    setMprice((quantity + 1) * price)
  };
  const decreaseQua = () => {
    setQuantity(quantity - 1);
    setMprice((quantity - 1)* price)
  };

  return (
    <div className="cart-section">
      {
        image ? <img src={image}/> : <img src={thumbnail} width={'auto'} height={'auto'}/>
      }
      <div className="cart-title">
        <h4>{title}</h4>
        <Stack spacing={1}>
          {  
           rating ? <Rating
            name="half-rating"
            defaultValue={rating}
            precision={0.5}
          /> : <Rating
          name="half-rating"
          defaultValue={rate}
          precision={0.5}
        />
          }
        </Stack>
        <span className="cart-detail">
          <span className="cart-price">
            <h3>{parseFloat(mprice).toFixed(2)}</h3>
            <h3>{quantity}</h3>
          </span>
        </span>
        <div className="minu-inp">
          <button
            className="remove-btn float-end"
            onClick={() => handleRemove(id)}
          >
            Remove
            <svg
              className="mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-shopping-bag"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
          <span className="quantity">
            <i class="bx bx-minus" onClick={() => decreaseQua(id)}></i>
            <input type="text" placeholder={quantity} />
            <i class="bx bx-plus" onClick={() => increaseQua(id)}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
