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

















/* 
const ItemListContainer = () => {

const [items, setItems]= useState();  

useEffect=(()=>{   const itemsPromise = new Promise (
        (resolve, reject)=>{
            setTimeout (
                ()=>{resolve (itemsArray)
               }
                ,2000)
        }
    );
        itemsPromise()
            .then (
                (res)=>{setItems (res)}
                )
            .catch (
                (rej)=>{console.log (rej, "error")}
                )
            }


  ,[])
    
   return (
        
   <ItemList />
   ) 
}
export default ItemListContainer; */