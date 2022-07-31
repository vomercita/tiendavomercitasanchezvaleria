import loading from "./loading.gif"

const Loading = () => {
    return ( 
        <div className="d-flex align-items-center justify-content-center">
        <img src={loading} alt="gif de espere que se está cargando la información" className="w-25"/>
        </div>
     );
}
export default Loading;