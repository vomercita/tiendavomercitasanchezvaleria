import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./ItemDetail.css"
import swal from "sweetalert";

const ItemDetail= ({item}) => {
    const {nombre, categoria, foto, descripcion, precio, stock,id}=item;
    const {addItem, removeItem}= useContext(CartContext);
    const [amount, setAmount]= useState(0);
     
    const onAdd=(cant)=>{
        setAmount (amount);
        addItem (item, cant); 
        if (item.stock>0 && cant <=item.stock){item.stock=item.stock-cant;}
        else if (item.stock<0) {removeItem()}
        else {
            swal(
                {text: `sólo podrás comprar hasta ${stock} unidades más, vuelve a intentarlo`,
            icon: "error"}
            );
            item.stock="???";
            removeItem();
                        
            }
       
    }; 

    return ( (item.stock>0)  ?
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
    :     
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
        <div>PRODUCTO AGOTADO</div>
        <Link to="/cart"><button>Ir al carrito</button></Link>
        <Link to="/"><button>Volver al listado</button></Link>
         
    </div>
</div>
    );
}
export default ItemDetail;