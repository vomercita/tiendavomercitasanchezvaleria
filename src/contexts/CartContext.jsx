import { addDoc, collection, getFirestore } from "firebase/firestore";
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

/* const sendOrder =()=>{
    const db = getFirestore();
    const order= {cartItems}
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then (res=>console.log (res.id))
}
 */
    return (
        <CartContext.Provider value={{cartItems, setCartItems, removeCart,removeItem, addItem, totalPrice,totalProducts /* sendOrder */}}>
           {children}
           </CartContext.Provider>
      );
}
export default CartProvider;

