import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./ItemDetail.css"

const ItemDetail= ({detalle, setCantidadItems}) => {
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
            <h1> {detalle.nombre}</h1>
            <p>Categoría: {detalle.categoria}</p>
            <img id="imgDetail" src= {detalle.foto}/>
            <p>{detalle.detalle}</p>
            <p>PRECIO: $ {detalle.precio}</p>
            <p>{detalle.stock} unidades disponibles</p>
            </div>
            <div id="bla2">
            {cantidad == 0 ? <ItemCount stock={detalle.stock} inicial= {1} onAdd={onAdd}/> : <p> Se agregaron {cantidad} productos al carrito</p>}
            <Link to="/cart"><button>Ir al carrito</button></Link>
            <Link to="/"><button>Volver al listado</button></Link>
            </div>
        </div>
    </> 
     );
}
 
export default ItemDetail;