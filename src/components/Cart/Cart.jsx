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
            total += item.precio
            
        });
        setPrecioTotal(total)
    }, [cartItems]);
    
        return ( precioTotal>0 ? 
        <>
        <div id="divCart">
        {cartItems.map(detalle =>
                      <div >
                          <h3 > {detalle.nombre}</h3>
                          <p>Categoría: {detalle.categoria}</p>
                          <p>PRECIO: ${detalle.precio}</p>
                       </div>
            )}
          <h1> {`TOTAL:$ ${precioTotal}`}</h1>
          <Link to="/"><button>Seguir comprando</button></Link>
          <Link to="/checkout"><button>Terminar compra</button></Link>
          <button >Vaciar carrito</button>
          </div>
        </> 
        : 
        <>
        <div className="my-5 d-flex flex-column align-items-center justify-content-center"> CARRITO VACÍO 
        <Link to="/"><button>Volver al listado</button></Link></div>
        </>
    );
} 
 
export default Cart;