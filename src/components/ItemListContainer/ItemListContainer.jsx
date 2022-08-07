import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import {useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getFirestore, collection, getDocs, query, where, limit, orderBy} from "firebase/firestore"

const ItemListContainer=()=>{
    const {name}= useParams();
    const [productosEstado, setProductosEstado]= useState ([]);
    const [loading, setLoading] = useState(false);

 
//OJO ESTO COPIADO P DEJARLO FUERA DEL EFFECT
    const db= getFirestore();
    const itemsCollection= collection(db, "Items");

    const coleccionFiltrada= query(itemsCollection,
        where("categoria", "==", `${name}`))
//OJO ESTO COPIADO P DEJARLO FUERA DEL EFFECT

useEffect(()=>{
    setLoading(true);
    
   /*  const db= getFirestore();
    const itemsCollection= collection(db, "Items");

    const coleccionFiltrada= query(itemsCollection,
        where("categoria", "==", `${name}`)) */

    if (name)
            {getDocs(coleccionFiltrada).then ((snapshot)=>{
            
            setProductosEstado( snapshot.docs.map (doc=>({id:doc.id, ...doc.data()})));
            setLoading(false)})}

    else     {getDocs(itemsCollection).then ((snapshot)=>{
    setProductosEstado (snapshot.docs.map (doc=>({id:doc.id, ...doc.data()})));
    setLoading(false)})
 }  
    
    },[name]);
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

