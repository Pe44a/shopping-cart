import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import fetchData from "./fetchProductsData"
import { uploadItemData } from "../LocaleStorage";

function ProductPage() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const [itemAdded, setItemAdded] = useState()

    useEffect(() => {
        fetchData()
          .then(setData) // Update state on successful data retrieval
          .catch(error => handleError(error)); // Handle errors
      }, []);

    const { id } = useParams();
    const paramId = Number(id);

    
    function decrement () {
        if(count > 1) {
            let num = count;
            num--;
            setCount(num)
        }
    }

    function increment () {
        let num = count;
        num++;
        setCount(num)
    }

    return (
    <>
        <NavBar />
        {/* Renders only when there is something to render */}
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

                        <div className="add-button-container"> 
                            <button id="add-item" className="button" onClick={() => uploadItemData(data[paramId], count)}>Add item</button>
                            <div className="item-amount">
                                <button id="minus" className="button" onClick={() => decrement()}>-</button>
                                    <input type="text" value={count} className="count-input" />
                                <button id="plus" className="button" onClick={() => increment()}>+</button>
                            </div>
                        </div>

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