import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import ProductListing from "./ProductListing.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import Checkout from "./Checkout.jsx"; // Don't forget to import the Checkout component if you're using it

const App = () => (
  <Router basename="/Paradise-Nursery/">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} /> {/* Checkout route */}
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
