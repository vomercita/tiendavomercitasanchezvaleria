import React, { useEffect, useState } from "react";
import productosArray from './productosArray';
import ItemList from './ItemList';

function promesaProductos (){
    return new Promise ((resolve, reject)=>{
        setTimeout( ( )=>{
                 resolve (productosArray);
                },2000);
        });
}
const ItemListContainer=()=>{
    const [productosEstado, setProductosEstado]= useState ([]);

    useEffect(()=>{
        promesaProductos()
          .then((res)=>{
          setProductosEstado (res)
                })}
    ,[]);

return(
    <div>
        <div>
            <p>ITEMLISTCONTAINER</p>
            <ItemList productos={productosEstado}/>
        </div>
    </div>
)

}
export default ItemListContainer

