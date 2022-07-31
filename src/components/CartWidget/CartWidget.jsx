import { useContext } from 'react';
import carrito from './carrito.svg';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cartItems, productosTotal}=useContext (CartContext);
    const numeroCarrito = productosTotal();
    
        return ( 
            <>
            <Link style={{textDecoration:"none", color:"black"}} to="/cart">
                <img src={carrito} alt="ícono de carrito de compras"/>
                <span >{cartItems.length==0 ? "" : numeroCarrito}</span>
            </Link>
            </>
        );
    }
export default CartWidget;