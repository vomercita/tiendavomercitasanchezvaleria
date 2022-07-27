import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./cart.css";

const Cart = () => {
    const {cartItems} =useContext(CartContext);
    const [precioTotal, setPrecioTotal]=useState(0);

    useEffect (()=>
    {
        let total= 0;
        cartItems.forEach((item) => {
            total += item.precio;
            
        });
        setPrecioTotal(total)
    }, [cartItems]);

    return ( 
        <>
        <div id="divCart">
        {cartItems.map(detalle =>
                      <div >
                          <h3 > {detalle.nombre}</h3>
                          <p>Categoría: {detalle.categoria}</p>
                          <p>PRECIO: ${detalle.precio}</p>
                       {/*    <p className="card-text">Cantidad: {detalle.cantidad}</p> */}
                       </div>
            )}
          <h1> {`TOTAL:$ ${precioTotal}`}</h1>
          <Link to="/"><button>Seguir comprando</button></Link>
          <Link to="/checkout"><button>Terminar compra</button></Link>
          </div>
        </>
    );
}
 
export default Cart;