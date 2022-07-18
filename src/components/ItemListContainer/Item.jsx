import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const Item = ({item}) => {
    return ( <> 
        <div>ITEM</div> 
        <div className='row'>
            <div className='col-sm-4'>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title"> {item.nombre}</h1>
                        <p className="card-text">{item.categoria}</p>
                        <img src= {item.foto}/>
                        <button >Ver detalle del producto</button>
                    </div>
                </div>
            </div>
        </div> 
</>  );
}
 
export default Item;
