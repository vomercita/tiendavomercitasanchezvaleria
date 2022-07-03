import React from "react";
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.css';
import NavBarEstilo from "./NavBarEstilo";


const NavBar=({nombre})=>{
  const displayNombre= nombre.toUpperCase();
    
  return (
    <>    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">{displayNombre}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-5">
          <NavBarEstilo class="navbar-brand" href="#" text={"Home"} />
        </li>
        <li class="nav-item mx-5">
         <NavBarEstilo class="navbar-brand" href="#" text={"Productos"} />
        </li>
        <li class="nav-item mx-5">
         <NavBarEstilo class="navbar-brand" href="#" text={"Contacto"} />
        </li>
      </ul>
    </div>
    <a class="navbar-brand" href="#"> {<CartWidget/>} </a>
  </div>
</nav></>
    )

};

export default NavBar;