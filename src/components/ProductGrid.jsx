import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mattiasehandelapi.azurewebsites.net/produkt", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          data.map((item) => ({
            id: item.id,
            name: item.namn,
            description: item.beskriving,
            price: `${item.pris} SEK`,
            image: `/assets/images/${item.bildNamn}`,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
