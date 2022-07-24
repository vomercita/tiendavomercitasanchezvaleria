import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail= ({detalle}) => {
    const [cantidad, setCantidad]= useState (0);
    const onAdd=(cantidad)=>{
        setCantidad (cantidad)
    }; 
    return (
    <>
    <div className='container-fluid'>
                <div className='d-flex'>
                    <div className="card text-center">
                        <div className="card-body">
                            <h1 className="card-title"> {detalle.nombre}</h1>
                            <p className="card-text">Categoría: {detalle.categoria}</p>
                            <img src= {detalle.foto}/>
                            <p className="card-text">{detalle.detalle}</p>
                            <p className="card-text">PRECIO: {detalle.precio}</p>
                            <p className="card-text">{detalle.stock} unidades disponibles</p>
                            {cantidad == 0 ? <ItemCount stock={detalle.stock} inicial= {1} onAdd={onAdd}/> : <p> Se agregaron {cantidad} productos al carrito</p>}
                            <Link to="/cart"><button>Ir al carrito</button></Link>

                        </div>
                    </div>
                </div>
            </div>
    </> 
     );
}
 
export default ItemDetail;