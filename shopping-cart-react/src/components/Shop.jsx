import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import fetchData from "./fetchProductsData";
import { Outlet } from "react-router-dom";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then(setData) // Update state on successful data retrieval
      .catch(error => handleError(error)); // Handle errors
  }, []);


  return (
    <>
      <NavBar />
      <div className="product-grid">
        {data.map((product) => (
          <>
            <ProductCard
              id = {product.id}
              title = {product.title}
              category = {product.category}
              image = {product.image}
              price = {product.price}
            />
          </>
        ))}
      </div>
      <Outlet/>
    </>
  );
}

export default Shop;