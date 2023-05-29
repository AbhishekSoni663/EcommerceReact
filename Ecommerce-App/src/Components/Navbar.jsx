import {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../CartContext/CartContext'


const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
<>
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Vimeo Store</Link>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link" to="contact" aria-expanded="false">
            Contact
          </Link>
        </li>
      </ul>
      <button className='btn add-btn'> <Link className='nav-link' to="/cart">Cart {cart.length} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></Link></button>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
