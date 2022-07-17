import React, { useEffect, useState } from "react";
import itemsArray from "./itemsArray";
import ItemList from "./ItemList";   


const ItemListContainer = () => {

const [items, setItems]= useState();  

useEffect=(()=>{   const itemsPromise = new Promise (
        (resolve, reject)=>{
            setTimeout (
                ()=>{resolve (itemsArray)
               },2000)
        }
    );
        itemsPromise
            .then (
                (res)=>{setItems (res)}
                )
            .catch (
                (rej)=>{console.log (rej, "error")}
                )
            }


  ,[])
    
   return (
        
   <ItemList items= {items}/>
   ) 
}
export default ItemListContainer;