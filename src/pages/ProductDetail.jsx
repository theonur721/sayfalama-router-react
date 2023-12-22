import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = ()=> {

    const [detail, setDetail] = useState(null);

    const { productId } = useParams ();

    const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`http://localhost:3060/books/${productId}`)
        .then((res)=> setDetail(res.data))
        .catch((err)=> navigate("/404"));
    },[]);

    if(detail === null) return "loading...";

    return (
        <div style={{height: "81vh"}} className="row align-items-center justify-content-center">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img className="rounded shadow" src={detail.image} alt="" />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1>{detail.title}</h1>
                <p>Yazar: {detail.author}</p>
                <p>{detail.description}</p>
                <p>Sayfa Sayısı: {detail.page}</p>
                <p>Yıl: {detail.year}</p>
            </div>
        </div>
    );
};


export default ProductDetail;