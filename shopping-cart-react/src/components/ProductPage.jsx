import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import fetchData from "./fetchProductsData"

function ProductPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
          .then(setData) // Update state on successful data retrieval
          .catch(error => handleError(error)); // Handle errors
      }, []);

    console.log(data)
    const { id } = useParams();
    const paramId = Number(id);

    return (
    <>
        <NavBar />
        {data.length > 0 ? (
            <>
                <div className="product-container">
                    <div >
                        <img className="page-image" src={data[paramId].image} alt="product" />
                    </div>
                    <div className="product-info">
                        <div className="title">{data[paramId].title}</div>
                        <div className="price">{data[paramId].price}$</div>
                        <div className="description">{data[paramId].description}</div>
                    </div>
                </div>
            </>
        ) : (
            <p>Loading product...</p>
        )}
    </>
    )
}

export default ProductPage