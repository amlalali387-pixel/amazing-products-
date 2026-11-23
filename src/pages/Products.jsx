
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Erreur:", error);
      });
  }, []);

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
