import React, { useContext } from "react";
import CartItem from "../Components/CartItem";
import CartContext from "../CartContext/CartContext";
import { DotLoader } from "react-spinners";

const Cart = () => {
  const { cart } = useContext(CartContext);
  // const total = cart.reduce((p, c) => {
  //   return p + c.price;
  // }, 0);

  
  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.length === 0 ? (
          <>
          <div className="cart-load">
          <DotLoader color="#0b211d" size={200}/>
          <h4>Loading....</h4>
          </div>
          </>
        ) : (
          cart.map((cart) => <CartItem key={cart.id} cart={cart} />)
        )}
      </div>
      {/* <div className="bill-section">
        <h1>
          Total Items : {cart.length}
          <br />
          Total Amount : <br /> ${total.toFixed()}
        </h1>
        <button className="pay-btn">Pay Now</button>
      </div> */}
    </div>
  );
};

export default Cart;
