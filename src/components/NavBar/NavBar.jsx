import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBarEstilo from "./NavBarEstilo.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx"; 
import { Link } from "react-router-dom";

const NavBar=({nombre})=>{
  const displayNombre= nombre.toUpperCase();
  
  return (
    <>  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link to={"/"} className="navbar-brand" href="#">{displayNombre}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <Link to={"/"}>
          <li className="nav-item mx-5">
            <NavBarEstilo className="navbar-brand" href="#" text={"Home"} />
          </li>
        </Link>
        <Link to={"/category/Almacén"}>
          <li className="nav-item mx-5">
            <NavBarEstilo className="navbar-brand" href="#" text={"Almacén"} />
          </li>
        </Link>
        <Link to={"/category/Especias"}>
          <li className="nav-item mx-5">
            <NavBarEstilo className="navbar-brand" href="#" text={"Especias"} />
          </li>
        </Link>
        <Link to={"/category/Frutos secos"}>
          <li className="nav-item mx-5">
            <NavBarEstilo className="navbar-brand" href="#" text={"Frutos secos"} />
          </li>
        </Link>
      
        <Link to={"/category/Semillas"}>
          <li className="nav-item mx-5">
            <NavBarEstilo className="navbar-brand" href="#" text={"Semillas"} />
          </li>
        </Link>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav></>
    )

};

export default NavBar;