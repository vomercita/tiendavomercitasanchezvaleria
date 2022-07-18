import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (
    <>
    <NavBar nombre= "Tienda Vomercita"/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  )
}

export default App;


