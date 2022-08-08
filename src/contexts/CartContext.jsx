import { addDoc, collection, getFirestore, updateDoc, doc, writeBatch } from "firebase/firestore";
import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems]= useState ([]);

    const removeCart = ()=>{setCartItems([])};

    const removeItem=(itemId)=>{
        return setCartItems(cartItems.filter (element=>element.item.id !==itemId))
    }

    const addItem=(item, quantity)=>{
        const newItem = isInCart(item);
        if (newItem){
            quantity= quantity + newItem.quantity;
            setCartItems(cartItems.splice (cartItems.findIndex ((element) =>element.item.id===item.id)
                ,1))
        }
        setCartItems ([...cartItems, {item, quantity}])
    }

    const isInCart =(item)=>{
        return cartItems.find ((element)=>element.item.id=== item.id)
    }

    const totalPrice =() =>{
        return cartItems.reduce ((prev,actual)=>prev + actual.item.precio * actual.quantity, 0)
    }

    const totalProducts =()=>{
        return cartItems.reduce ((prev,actual)=>prev+actual.quantity, 0)
    }
    
    const sendOrder =(totalPrice, clientData)=>{
        
        const db = getFirestore();
        const order= {
            items: cartItems.map (item=> ({id:item.item.id, nombre:item.item.nombre, precio:item.item.precio})),
            total: totalPrice, 
            cliente: clientData,
            fecha: new Date(),
           }
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then (res=>alert (("tu numero de compra es :")+ (res.id)))
    }
   /*
    const updateOrder= ()=>{
        const db= getFirestore();
        const docRef= doc (db, "orders", "lVhV2zLU9eibBkPAX8rC");
        updateDoc(docRef, {total:500}). then (res=> alert ("order succesfull"))
    } */

    /* const updatesOrders = ()=>{
        const db= getFirestore();
        const batch= writeBatch(db);
        const docRef= doc (db, "orders", "lVhV2zLU9eibBkPAX8rC");
        const docRef2= doc (db, "orders", "yLtbYh2UJzkEF42kgDAL");

        batch.update(docRef, {total:1844440});
        batch.update(docRef2, {total:28555550});
        //1.23h
        batch.commit();
    } */

    return (
        <CartContext.Provider value={{cartItems, setCartItems, removeCart,removeItem, addItem, totalPrice,totalProducts, sendOrder, /* updatesOrders */ }}>
           {children}
        </CartContext.Provider>
      );
}
export default CartProvider;

