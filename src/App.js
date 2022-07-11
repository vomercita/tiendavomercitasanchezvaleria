import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <>
    <NavBar nombre= "Tienda Vomercita"/>
    <ItemListContainer/>
    <ItemCount/>
    </>
  )
}

export default App;


