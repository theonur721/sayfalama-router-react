import { Link } from "react-router-dom";

const UndefinedPage = ()=> {
    return (
        <div style={{height: "81vh"}} className="d-flex flex-column align-items-center justify-content-center gap-4" >
            <h1 className="text-warning">404</h1>
            <p className="lead">Üzgünüz, aradığınız sayfa mevcut değil...</p>
            <p><span>yolculuğunuza buradan devam edin</span> <Link className="btn btn-danger mx-3" to={"/"} >Anasayfa</Link> </p>
        </div>
    );
};


export default UndefinedPage;