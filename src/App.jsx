// import React from "react";
// import Navbar from "./components/Navbar";
// import ProductGrid from "./components/ProductGrid";
// import Footer from "./components/Footer";

// function App() {
//   // Dummy data for products
//   const products = [];

//   return (
//     <div>
//       <Navbar />
//       <ProductGrid products={products} />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import ProductDetailPage from "./components/ProductDetailPage"; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductGrid products={[]} />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;