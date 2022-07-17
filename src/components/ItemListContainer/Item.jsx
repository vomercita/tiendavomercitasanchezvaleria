
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import itemsArray from './itemsArray';

const Item = () => {
    return (
<>
<p> ITEM LIST</p>
{itemsArray.map((producto)=> 
<> 
    <div className="card">
        <div className="card-img-top" src="..." alt="Card image cap"></div>
        <div className="card-body">
            <h5 className="card-title"> {producto.nombre}</h5>
            <p className="card-text">{producto.detalle}</p>
            <p className="card-text">{producto.precio}</p>
            <a href="#" className="btn btn-primary">Ver detalle del producto</a>
            <p className="card-text">{producto.stock}</p>
        </div>
    </div>
</>    
   )}
</>

     );
}
 
export default Item;
