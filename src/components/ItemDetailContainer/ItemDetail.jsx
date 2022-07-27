import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./ItemDetail.css"

const ItemDetail= ({detalle}) => {
    const {nombre, categoria, foto, descripcion, precio, stock}=detalle;
    const [cantidad, setCantidad]= useState (0);
    const {setCartItems}= useContext(CartContext);

    const onAdd=(cantidad)=>{
        setCantidad (cantidad);
        setCartItems((prev)=> [...prev, detalle])
    }; 

    return (
    <>
        <div id="divDetail">
            <div id="bla1">
            <h1> {nombre}</h1>
            <p>Categoría: {categoria}</p>
            <img id="imgDetail" src= {foto} alt="imagen del producto"/>
            <p>{descripcion}</p>
            <p>PRECIO: $ {precio}</p>
            <p>{stock - cantidad} unidades disponibles</p>
            </div>
            <div id="bla2">
            {cantidad === 0 ? <ItemCount stock={stock} inicial= {1} onAdd={onAdd}/> : <p> Se agregaron {cantidad} productos al carrito</p>}
            {cantidad!=0 ? <Link to="/cart"><button>Ir al carrito</button></Link> : ""}
            <Link to="/"><button>Seguir comprando </button></Link>
             
            </div>
        </div>
    </> 
     );
}
 
export default ItemDetail;