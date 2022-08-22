import React, { useEffect, useState } from "react";
import ItemDetail from  './ItemDetail';
import {useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getDoc, doc, getFirestore} from "firebase/firestore"
import Error from "../Error404/Error";

const ItemDetailContainer=()=>{
    const [loading, setLoading] = useState(false);
    const {id}= useParams();
    const [detalleEstado, setDetalleEstado]= useState ([]);

const db = getFirestore();
const docRef=doc(db, "Items", `${id}`);

useEffect(()=>{
    setLoading(true);
    getDoc(docRef).then ((snapshot)=>{
    setDetalleEstado( {id: snapshot.id, ...snapshot.data()});
    setLoading(false);})
    } ,[id]);
    
    if (loading) return <Loading />;

return( (id<11) ?
    <div>
        <div>
            <ItemDetail item={detalleEstado}/>
        </div>
    </div>
    :
    <Error/>
)
}
export default ItemDetailContainer
