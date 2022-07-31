import Item from './Item';

const ItemList = ({productos}) => {
    return ( <>
        {productos.map(producto=>{
               return(
            <Item item={producto} key={producto.id}/>
               ) 
            })}
  </> );
}
export default ItemList;

