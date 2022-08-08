import { useContext } from 'react';
import carrito from './carrito.svg';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cartItems, totalProducts}=useContext (CartContext);
    const cartNumber = totalProducts();
    
        return ( 
            <>
            <Link style={{textDecoration:"none", color:"black"}} to="/cart">
                <img src={carrito} alt="ícono de carrito de compras"/>
                <span >{cartItems.length===0 ? "" : cartNumber}</span>
            </Link>
            </>
        );
    }
export default CartWidget;