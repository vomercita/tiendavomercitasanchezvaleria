import "./item.css"
import {Link} from "react-router-dom"

const Item = ({item}) => {
    return ( 
    <> 
        <div id='divItem'>
            <h1> {item.nombre}</h1>
            <p>{item.categoria}</p>
            <img id='imgItem' src= {item.foto}/>
            <Link to={`/item/${item.id}`}><button >Ver detalle del producto</button></Link>
        </div>

    </>
    );
}
 
export default Item;
