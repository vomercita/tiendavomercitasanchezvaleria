import React, { useEffect, useState } from "react";
import ItemDetail from  './ItemDetail';
import productosArray from '../ItemListContainer/productosArray'
import {Link, useParams } from "react-router-dom";

function promesaDetalleProductos (){
    return new Promise ((resolve, reject)=>{
        setTimeout( ( )=>{
                 resolve (productosArray);
                },2000);
        });
}
const ItemDetailContainer=()=>{
    const {id}= useParams();
    const [detalleEstado, setDetalleEstado]= useState ([]);

    useEffect(()=>{
        promesaDetalleProductos()
          .then((res)=>{
            const details= res;
            if (id) {
                setDetalleEstado (details.filter ((detail=> detail.id == id)))
            }else{setDetalleEstado(details)}
                })} 

    ,[id]);

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
