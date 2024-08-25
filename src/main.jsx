import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage.jsx";
import ProductListing from "./ProductListing.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import Checkout from "./Checkout.jsx";

const App = () => (
  <Router basename="/Paradise-Nursery/">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
