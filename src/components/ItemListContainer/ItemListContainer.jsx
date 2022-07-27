import React, { useEffect, useState } from "react";
import productosArray from './productosArray';
import ItemList from './ItemList';
import {useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

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
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        promesaProductos()
          .then((res)=>{
            const products= res;
            if (name){
                setProductosEstado (products.filter(( product=> product.categoria==name)))

            }else{setProductosEstado(products)}
            setLoading(false);
                })}
    ,[name]);
    if (loading) return <Loading/>;

return(
    <div>
        <div>
            <ItemList productos={productosEstado}/>
        </div>
    </div>
)

}
export default ItemListContainer

