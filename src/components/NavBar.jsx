import React from "react";
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.css';

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
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Precios</a>
        </li>
      </ul>
    </div>
    <a class="navbar-brand" href="#"> {<CartWidget/>} </a>
  </div>
</nav></>
    )

};

export default NavBar;