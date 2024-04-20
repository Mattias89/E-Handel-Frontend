import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7288/produkt', { mode: 'cors' })  // Adjust URL if needed
      .then(response => response.json())
      .then(data => {
        setProducts(data.map(item => ({
          id: item.id,
          name: item.namn,
          price: `${item.pris} SEK`,
          slug: `product-${item.id}`,  // Example slug creation
          // image: `path_to_images/${item.bildNamn}`  // Assuming images are stored locally or adjust the path as needed
          image: item.bildNamn  // Directly use bildNamn which should match the filename in the public/images directory
        })));
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;