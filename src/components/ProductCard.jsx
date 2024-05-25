import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={`./images/${product.image}`} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;