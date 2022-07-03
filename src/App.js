
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar nombre= {"Tienda Vomercita"}/>
    <ItemListContainer greeting= {"Bienvenidos"}/>
    </>
  )
}

export default App;


