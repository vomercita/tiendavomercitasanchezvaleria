import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./cart.css";

const Cart = () => {
    const {cartItems,removeCart, removeItem, totalPrice} =useContext(CartContext);
    const finalPrice=totalPrice();
    
        return ( cartItems.length >0 ?
        <> 
        <div id="divCart"  >
        {cartItems.map(detalle =>
                      <div >
                          <h3 > {detalle.item.nombre}</h3>
                          <p>PRECIO: ${detalle.item.precio}</p>
                          <p> Cantidad: {detalle.quantity}</p>
                          <p>Subtotal: $ {detalle.item.precio*detalle.quantity}</p>
                          <button onClick={()=>removeItem(detalle.item.id)}>Eliminar</button>
                       </div>
            )}
          <h1> Total: $ {finalPrice}</h1>
          <Link to="/"><button>Seguir comprando</button></Link>
          <button onClick={removeCart}>Vaciar carrito</button>
          <Link to="/checkout"><button>Terminar compra</button></Link> 
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