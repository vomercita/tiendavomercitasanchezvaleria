import React, { useEffect, useState } from "react";
import ItemDetail from  './ItemDetail';
import productosArray from '../ItemListContainer/productosArray'
import {useParams } from "react-router-dom";

   
const ItemDetailContainer=()=>{
    const {id}= useParams();
    const [detalleEstado, setDetalleEstado]= useState ({});

const promesaDetalle= new Promise ((resolve, reject)=>{
    setTimeout (()=>{resolve(productosArray)}, 2000);
});

    useEffect(()=>{
        promesaDetalle.then((res)=>{
            const details= res.filter((detalle)=>detalle.id==id);
            setDetalleEstado(details[0]) ;
                })}

    ,[id]);

return(
    <div>
        <div>
            
            <ItemDetail detalle={detalleEstado}/>
        </div>
    </div>
)

}
export default ItemDetailContainer
