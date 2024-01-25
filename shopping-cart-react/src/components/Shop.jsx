import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";

function Shop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <NavBar />

      <div className="product-grid">
        {data.map((product) => (
          <>
            <ProductCard
              key = {product.id}
              title = {product.title}
              category = {product.category}
              image = {product.image}
              price = {product.price}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default Shop;
