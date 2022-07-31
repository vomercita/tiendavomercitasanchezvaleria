import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./ItemDetail.css"

const ItemDetail= ({item}) => {
    const {nombre, categoria, foto, descripcion, precio, stock}=item;
    const {addItem}= useContext(CartContext);
    const onAdd=(cant)=>{
        addItem (item, cant) 
    }; 

    return (
    <>
        <div id="divDetail">
            <div id="bla1">
                <h1> {nombre}</h1>
                <p>Categoría: {categoria}</p>
                <img id="imgDetail" src= {foto} alt="imagen del producto"/>
                <p>{descripcion}</p>
                <p>PRECIO: $ {precio}</p>
                <p>{stock} items en stock</p>
            </div>
            <div id="bla2">
                <ItemCount stock={stock} inicial= {1} onAdd={onAdd}/>
                <Link to="/cart"><button>Ir al carrito</button></Link> 
                <Link to="/"><button>Seguir comprando </button></Link>
            </div>
        </div>
    </> 
     );
}
export default ItemDetail;