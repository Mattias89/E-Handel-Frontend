import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // Assuming you have an API endpoint to fetch product details by slug
    fetch(`https://your-api/products/${slug}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} SEK</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetailPage;