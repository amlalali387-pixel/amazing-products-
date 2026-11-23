
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log("Erreur:", error);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details">
      <Link to="/">← Back to products</Link>

      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="200"
      />

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <p>Category: {product.category}</p>

      <p>Rating: {product.rating.rate} / 5</p>
    </div>
  );
}

export default ProductDetails;
