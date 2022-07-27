import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './contexts/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Error from './components/Error404/Error.jsx'

function App() {
  return (
    <> 
    <CartProvider>
      <BrowserRouter>
          <NavBar nombre= "Tienda Vomercita" />
          <Routes>  
                <Route index element={<ItemListContainer/>}> </Route>
                <Route path="/category/:name" element={<ItemListContainer/>}> </Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}> </Route>
                <Route path="*" element={<Error/>}> </Route>
                <Route path="/cart" element={<Cart/>}> </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;


