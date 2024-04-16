import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';

function App() {
  // Dummy data for products
  const products = [
    { id: 1, name: 'Svart T-Shirt', price: '199 SEK', slug: 'svart-tshirt', image: 'path_to_image' },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <SearchBar />
      <ProductGrid products={products} />
    </div>
  );
}

export default App;