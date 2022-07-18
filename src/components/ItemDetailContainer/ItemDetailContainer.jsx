import React, { useEffect, useState } from "react";
import ItemDetail from  './ItemDetail';
import productosArray from '../ItemListContainer/productosArray'

function promesaDetalleProductos (){
    return new Promise ((resolve, reject)=>{
        setTimeout( ( )=>{
                 resolve (productosArray);
                },2000);
        });
}
const ItemDetailContainer=()=>{
    const [detalleEstado, setDetalleEstado]= useState ([]);

    useEffect(()=>{
        promesaDetalleProductos()
          .then((res)=>{
          setDetalleEstado (res[1])
                })}
    ,[]);

return(
    <div>
        <div>
            <p>ITEMDETAILCONTAINER</p>
            <ItemDetail detalle={detalleEstado}/>
        </div>
    </div>
)

}
export default ItemDetailContainer
