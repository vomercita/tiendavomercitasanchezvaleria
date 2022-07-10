import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock=8}) => {
     
    const [contador, setContador] = useState (0)
    const mas = () => {
        if (contador<stock) {setContador (contador+1)}
    }
    const menos = () => {
        if (contador>0) {setContador (contador -1)}
    } 

    return (  <>
        <div>
            <p id= "pProducto">Producto</p>
        </div>
        <div id= "divBotones">
            <button onClick={()=> menos()}> - </button>
            <>{contador}</>
            <button onClick={()=> mas()}> + </button>
        </div>
        <div id="divAgregar">
            <p id="pAgregar">Agregar al carrito</p>
        </div>
        </>
    );
}
 
export default ItemCount;