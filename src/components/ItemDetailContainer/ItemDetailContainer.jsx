import React, { useEffect, useState } from "react";
import ItemDetail from  './ItemDetail';
import {useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getDoc, doc, getFirestore} from "firebase/firestore"

const ItemDetailContainer=()=>{
    const [loading, setLoading] = useState(false);
    const {id}= useParams();
    const [detalleEstado, setDetalleEstado]= useState ([]);

//OJO ESTO REPETIDO. FUERA DEL EFFECT PA PROBAR
const db = getFirestore();
const docRef=doc(db, "Items", `${id}`);
//OJO ESTO REPETIDO. FUERA DEL EFFECT PA PROBAR

useEffect(()=>{
    setLoading(true);
    /* const db = getFirestore();
    const docRef=doc(db, "Items", `${id}`); */
   
    getDoc(docRef).then ((snapshot)=>{
    setDetalleEstado( {id: snapshot.id, ...snapshot.data()});
    setLoading(false);})
        
    } ,[id]);
    if (loading) return <Loading />;

return(
    <div>
        <div>
            <ItemDetail item={detalleEstado}/>
        </div>
    </div>
)
}
export default ItemDetailContainer
