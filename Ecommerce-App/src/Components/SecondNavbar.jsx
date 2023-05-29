import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

const SecondNavbar = () => {

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <a href="" className="navbar-brand">
    //       <iframe
    //         src="https://lottie.host/?file=e1d188b7-1b04-457c-8734-6012ea3b696c/ax1Z5CcYXo.json"
    //         width={"120"}
    //         height={"70"}
    //       ></iframe>
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse second-nav"
    //       id="navbarSupportedContent"
    //     >
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link to="">Shoes</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/jewelery">Jewelery</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="">Mans & WomenClothing</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/electronic">Electronics</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <div className="container secondcont" style={{ display: "flex" }} role="presentation" onClick={handleClick}>
      <div className="sec-main">
        <a href="" className="seco-br">
          <iframe
            src="https://lottie.host/?file=e1d188b7-1b04-457c-8734-6012ea3b696c/ax1Z5CcYXo.json"
            width={"120"}
            height={"70"}
          ></iframe>
        </a>
        <div className="bread" >
          <Link className="br-link" to="/men&women">MANS & WOMENSCLOTHNG</Link>
          <Link className="br-link" to="/electronic">ElECTRONICS</Link>
          <Link className="br-link" to="/jewelery">JEWELERY</Link>
        </div>
      </div>
    </div>
  );
}

export default SecondNavbar;
