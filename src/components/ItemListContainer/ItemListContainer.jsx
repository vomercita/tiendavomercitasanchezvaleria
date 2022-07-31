import React, { useEffect, useState } from "react";
import productosArray from './productosArray';
import ItemList from './ItemList';
import {useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getDoc, doc, getFirestore, collection, getDocs, query, } from "firebase/firestore"

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

/*UN SOLO DOC 
const db = getFirestore();
const docRef=doc(db, "Items", "Items")
getDoc(docRef).then ((snapshot)=>{
    console.log(snapshot.data());
    const data = {id: snapshot.id, ...snapshot.data()};}) */

/* UNA COLECCION 
const db= getFirestore()
const itemsCollection= collection(db, "Items");
getDocs(itemsCollection).then ((snapshot)=>{
   const data = snapshot.docs.map (doc=>({
    id:doc.id, ...doc.data()
   }))
   console.log(data)
}) */
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
            <div >
                <ItemList productos={productosEstado}/>
            </div>
        </div>
    )
}
export default ItemListContainer

