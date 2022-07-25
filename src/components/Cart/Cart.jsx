import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

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
        {cartItems.map(detalle =>
            <div className='container-fluid'>
              <div className='d-flex'>
                  <div className="card text-center">
                      <div className="card-body">
                          <h3 className="card-title" > {detalle.nombre}</h3>
                          <p className="card-text">Categoría: {detalle.categoria}</p>
                          <p className="card-text">PRECIO: ${detalle.precio}</p>
                       {/*    <p className="card-text">Cantidad: {detalle.cantidad}</p> */}
                       </div>
                  </div>
              </div>
            </div>)}
          <h1> {`TOTAL:$ ${precioTotal}`}</h1>
          <Link to="/"><button>Volver al listado</button></Link>
        </>
    );
}
 
export default Cart;