import ItemCount from "../ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const ItemDetail= ({detalle}) => {
    
    return (
<>
<p> DETALLE</p>
<div className='container-fluid w-50'>
            <div className='d-flex'>
                <div className="card text-center">
                    <div className="card-body">
                        <h1 className="card-title"> {detalle.nombre}</h1>
                        <p className="card-text">{detalle.categoria}</p>
                        <img src= {detalle.foto}/>
                        <p className="card-text">{detalle.detalle}</p>
                        <p className="card-text">{detalle.precio}</p>
                        <p className="card-text">{detalle.stock}</p>
                        <ItemCount stock={detalle.stock} inicial= {1}/>
                    </div>
                </div>
            </div>
        </div>

</> 
     );
}
 
export default ItemDetail;