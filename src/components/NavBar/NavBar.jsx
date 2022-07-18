import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBarEstilo from "./NavBarEstilo.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx"; 

const NavBar=({nombre})=>{
  const displayNombre= nombre.toUpperCase();
  
  return (
    <>  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">{displayNombre}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-5">
          <NavBarEstilo className="navbar-brand" href="#" text={"Home"} />
        </li>
        <li className="nav-item mx-5">
         <NavBarEstilo className="navbar-brand" href="#" text={"Productos"} />
        </li>
        <li className="nav-item mx-5">
         <NavBarEstilo className="navbar-brand" href="#" text={"Contacto"} />
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav></>
    )

};

export default NavBar;