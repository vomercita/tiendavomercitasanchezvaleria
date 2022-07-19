import React, { useEffect, useState } from "react";
import productosArray from './productosArray';
import ItemList from './ItemList';
import { Link, useParams } from "react-router-dom";

function promesaProductos (){
    return new Promise ((resolve, reject)=>{
        setTimeout( ( )=>{
                 resolve (productosArray);
                },2000);
        });
}
const ItemListContainer=()=>{
    const {name}= useParams();
    const [productosEstado, setProductosEstado]= useState ([]);

    useEffect(()=>{
        promesaProductos()
          .then((res)=>{
            const products= res;
            if (name){
                setProductosEstado (products.filter(( product=> product.categoria==name)))

            }else{setProductosEstado(products)}
          
                })}
    ,[name]);

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

