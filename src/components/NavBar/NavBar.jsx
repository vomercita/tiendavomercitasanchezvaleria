import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx"; 
import { Link } from "react-router-dom";
import veggiecitalogo from "./veggiecitalogo.svg"

const NavBar=({nombre})=>{
  const displayNombre= nombre.toUpperCase();
  
  return (
    <>  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      
    <Link to={"/"} className="navbar-brand" href="#"> <img src={veggiecitalogo} alt="logo" style={{width:50}}/>{displayNombre}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <Link to={"/"} style={{textDecoration:"none"}}><li className="nav-item mx-5"> Home </li></Link>
        <Link to={"/category/Almacén"} style={{textDecoration:"none"}}><li className="nav-item mx-5"> Almacén</li></Link>
        <Link to={"/category/Especias"} style={{textDecoration:"none"}}><li className="nav-item mx-5">Especias</li></Link>
        <Link to={"/category/Frutos secos"} style={{textDecoration:"none"}}><li className="nav-item mx-5">Frutos secos</li></Link>
        <Link to={"/category/Semillas"} style={{textDecoration:"none"}}><li className="nav-item mx-5">Semillas</li></Link>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav></>
    )
};

export default NavBar;