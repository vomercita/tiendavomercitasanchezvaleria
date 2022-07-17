import {useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, inicial}) => {
     
    const [contador, setContador] = useState (inicial)
    const mas = () => {
        if (contador<stock) {setContador (prev=>prev+1)}
    }
    const menos = () => {
        if (contador>1 && stock>0) {setContador (prev=>prev-1)}
    } 
     
    const onAdd= ()=>  {console.log ({contador})        
    }

    return (  <>
        <div>
            <p id= "pProducto">Producto</p>
        </div>
        <div id= "divBotones">
            <button onClick={menos} > - </button>
            <>{contador}</>
            <button onClick={mas}> + </button>
        </div>
        <button id= "botonAgregar" onClick={onAdd}> Agregar al carrito</button>
        
        </>
    );
}
 
export default ItemCount;