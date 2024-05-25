import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/style.css";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setError("Product ID is missing or invalid.");
      setLoading(false);
      return;
    }

    const url = `https://mattiasehandelapi.azurewebsites.net/produkt/${id}`;
    fetch(url, { mode: "cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProduct({
          id: data.id,
          name: data.namn,
          description: data.beskriving,
          price: `${data.pris} SEK`,
          image: `./assets/images/${data.bildNamn}`,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching product details: {error}</div>;
  }

  if (!product) {
    return <div className="no-product">No product found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info-container">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="product-price">{product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
