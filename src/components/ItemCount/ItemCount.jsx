import {useState } from "react";
import './ItemCount.css';


const ItemCount = ({stock, inicial, onAdd }) => {
     
    const [contador, setContador] = useState (inicial)
    const mas = () => {
        if (contador<stock) {setContador (prev=>prev+1)} else {alert ("Lo lamentamos, no puedes agregar más unidades de este producto")}
    }
    const menos = () => {
        if (contador>1 && stock>0) {setContador (prev=>prev-1)}
    } 
      
    return (  
    <>
        <div id= "divBotones">
            <button onClick={menos} > - </button>
            <>{contador}</>
            <button onClick={mas}> + </button>
        </div>
      <button id= "botonAgregar" onClick={()=>onAdd (contador)}> Agregar al carrito</button>
    </>
    );
}
 
export default ItemCount;