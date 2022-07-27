import "./item.css"
import {Link} from "react-router-dom"

const Item = ({item}) => {
    const {nombre, categoria,foto,id}=item;
    return ( 
    <> 
        <div id='divItem'>
            <h1> {nombre}</h1>
            <p>{categoria}</p>
            <img id='imgItem' src= {foto} alt="imagen del producto"/>
            <Link to={`/item/${id}`}><button >Ver detalle del producto</button></Link>
        </div>
    </>
    );
}
 
export default Item;
