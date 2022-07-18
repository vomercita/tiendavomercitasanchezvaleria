import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const Item = ({item}) => {
    return ( <> 
        <div>ITEM</div> 
        <div className='container-fluid w-25'>
            <div className='d-flex'>
                <div className="card text-center">
                    <div className="card-body">
                        <h1 className="card-title"> {item.nombre}</h1>
                        <p className="card-text">{item.categoria}</p>
                        <img src= {item.foto} className="card-img-top"/>
                        <button >Ver detalle del producto</button>
                    </div>
                </div>
            </div>
        </div> 
</>  );
}
 
export default Item;
