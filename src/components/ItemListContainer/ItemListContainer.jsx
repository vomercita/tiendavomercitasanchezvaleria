import React, { useEffect, useState } from "react";
import itemsArray from "./itemsArray";
import ItemList from "./ItemList";   


const ItemListContainer = () => {

const [items, setItems]= useState();  
console.log (itemsArray)

useEffect=(()=>{   const itemsPromise = new Promise (
        (resolve, reject)=>{
            setTimeout (
                ()=>{resolve (items)}
                ,2000)
        }
    );
        itemsPromise
            .then (
                (res)=>{setItems (itemsArray)}
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
export default ItemListContainer;