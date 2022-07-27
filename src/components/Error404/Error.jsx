import { Link } from "react-router-dom";
import michioops from "./michioops.gif"

const Error = () => {
    return ( 
<>
<div className="d-flex flex-column align-items-center">
    <h1 className="my-5">OOPS!</h1>
    <img src={michioops} alt="gif de gatito con cara de sorprendido tapandose la boca con la pata"/>
    <p >Lo sentimos, esta página no existe...</p>
    <p >...pero existe este botón para volver al listado!</p>
    <Link to="/"><button> Home </button></Link>
</div>

</>
);
}
 
export default Error;


  