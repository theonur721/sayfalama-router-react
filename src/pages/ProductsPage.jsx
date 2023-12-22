import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const ProductsPage = ()=> {
    const [books, setBooks] = useState(null);

    useEffect(()=> {
        axios
        .get("http://localhost:3060/books")
        .then((res) => setBooks(res.data))
        .catch((err) => alert("hata"));
    }, []);

    if(books===null) return "loading...";


    return (
        <div>
            <h3 className="px-5 mt-3">{books.length} kitap bulundu</h3>
            <div className="cards-container">
                {books.map((book) => (
                    <Card key={book.id} data={book} />
                ))}
            </div>
        </div>
    );
};


export default ProductsPage;