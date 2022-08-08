import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Checkout = () => {
    const {cartItems,totalPrice, sendOrder, updateOrder, updatesOrders} =useContext(CartContext);
    const finalPrice=totalPrice();
    const submitForm= (e) =>{
      e.preventDefault();
      const inputs=document.getElementsByTagName ("input");
      const data= Array.from (inputs).map ((input)=>input.value);
      sendOrder(finalPrice, {nombre: data [0], email: data [1], telefono: data [2]})
 
      /* updatesOrders(); */
    }
    
        return ( 
        <> 
       
          <h1> Total: $ {finalPrice}</h1>
         
          <form onSubmit={submitForm}> 
            <label htmlFor="">Nombre y Apellido</label> 
            <input type="text" name="" id="" />

            <label htmlFor="">E-mail</label> 
            <input type="email" name="" id="" />
            
            <label htmlFor="">Teléfono</label> 
            <input type="number" name="" id="" />
            
          <button onClick={()=>sendOrder(finalPrice)} type="submit">Enviar</button> 
         
          </form> 
          
          <Link to="/cart"><button>Volver al carrito</button></Link>
          <Link to="/"><button>Home</button></Link>
        </> 
    );
} 
export default Checkout;