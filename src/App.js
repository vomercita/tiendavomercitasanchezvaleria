import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './contexts/CartContext.jsx';
import { useState } from 'react';
import Cart from './components/Cart/Cart.jsx';

function App() {
  const [cantidadItems, setCantidadItems]= useState (0);

  return (
    <> 
    <CartProvider>
      <BrowserRouter>
          <NavBar nombre= "Tienda Vomercita" cantidadItems={cantidadItems}/>
          <Routes>  
                <Route index element={<ItemListContainer/>}> </Route>
                <Route path="/category/:name" element={<ItemListContainer/>}> </Route>
                <Route path="/item/:id" element={<ItemDetailContainer setCantidadItems={setCantidadItems}/>}> </Route>
                <Route path="*" element={<div>ERROR 404</div>}> </Route>
                <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;


