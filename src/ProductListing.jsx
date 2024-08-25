import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

// Import images from src/assets
import fernImage from "./assets/fern.jpg";
import cactusImage from "./assets/cactus.jpeg";
import rosePlantImage from "./assets/rose plant.jpeg";

// Sample product data
const products = [
  { id: 1, name: "Fern", price: 1299, image: fernImage },
  { id: 2, name: "Cactus", price: 899, image: cactusImage },
  { id: 3, name: "Rose Plant", price: 1599, image: rosePlantImage },
  // Add more products as needed
];

const ProductListing = () => {
  // Load cart from localStorage
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage());
  const [addedProducts, setAddedProducts] = useState(new Set());

  useEffect(() => {
    // Save cart to localStorage whenever cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Update addedProducts based on the cart items
    const cartProductIds = new Set(cart.map((product) => product.id));
    setAddedProducts(cartProductIds);
  }, [cart]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setAddedProducts(new Set(updatedCart.map((p) => p.id)));
  };

  return (
    <Layout cartItemCount={cart.length}>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={product.image} // Use imported image
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-4">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className={`px-4 py-2 rounded-lg transition ${
                      addedProducts.has(product.id)
                        ? "bg-gray-500 text-white cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                    disabled={addedProducts.has(product.id)}
                  >
                    {addedProducts.has(product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
