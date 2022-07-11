
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const Item = (props) => {
    console.log (props.propiedades)
     return (
<>
<p> ITEM LIST</p>
{props.propiedades.map((nuevoArray)=> 
<> 
    <div className="card">
        <div className="card-img-top" src="..." alt="Card image cap"></div>
        <div className="card-body">
            <h5 className="card-title"> {nuevoArray.nombre}</h5>
            <p className="card-text">{nuevoArray.detalle}</p>
            <p className="card-text">{nuevoArray.precio}</p>
            <a href="#" className="btn btn-primary">Ver detalle del producto</a>
            <p className="card-text">{nuevoArray.stock}</p>
        </div>
    </div>
</>    
   )}
</>

     );
}
 
export default Item;

