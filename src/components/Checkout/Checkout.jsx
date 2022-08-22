import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Checkout = () => {
    const {totalPrice, sendOrder, removeCart} =useContext(CartContext);
    const finalPrice=totalPrice();
    const submitForm= (e) =>{
      e.preventDefault();
      const inputs=document.getElementsByTagName ("input");
      const data= Array.from (inputs).map ((input)=>input.value);
      sendOrder(finalPrice, {nombre:data[0],email:data[1],telefono:data[2]})
     }

     return ( 
        <> 
          <h1 className="d-flex flex-column align-items-center my-5"> Total: $ {finalPrice}</h1>
         
          <form className="d-flex flex-column align-items-center" onSubmit={submitForm}> 
            <label htmlFor="">Nombre*</label> 
            <input type="text" required="required" />

            <label htmlFor="">Apellido*</label> 
            <input type="text" required="required" />

            <label htmlFor="">E-mail*</label> 
            <input type="email" required="required" />
                      
            <label htmlFor="">Teléfono</label> 
            <input type="number"/>
            <p style= {{fontSize: 12, color:"red"}}>*campos obligatorios</p>
            <button onClick={()=>sendOrder(finalPrice)} type="submit">Enviar datos y realizar la compra</button> 
          </form> 
          <div className="d-flex flex-column align-items-center">
          <Link to="/cart"><button>Volver al carrito</button></Link>
          <Link to="/"><button onClick={removeCart}>Home</button></Link>
          </div>
        </> 
    );
} 
export default Checkout;