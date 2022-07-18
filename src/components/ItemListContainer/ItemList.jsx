import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return ( <>
    <div>ITEMLIST</div>
        {productos.map(producto=>{
               return(
            <Item item={producto} key={producto.id}/>
               ) 
            })}
  </> );
}
 
export default ItemList;





















/* const ItemList = () => {
    return ( 
        <><p> ITEM LIST</p>
        <Item /></>
);
}
 
export default ItemList; */