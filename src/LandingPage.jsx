import React from "react";
import { Link } from "react-router-dom";
import plantImage from "./assets/plants.jpg";
import Layout from "./Layout";

const LandingPage = () => {
  return (
    <Layout>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${plantImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Discover Your Green Sanctuary
          </h2>
          <p className="text-xl mb-8">
            At Paradise Nursery, we are passionate about helping you create a
            lush and vibrant space. Explore our wide range of high-quality
            plants, garden accessories, and more. Whether you're a seasoned
            gardener or just starting out, we have everything you need to
            transform your home into a green oasis.
          </p>
          <Link
            to="/products"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
          >
            Shop Now
          </Link>
        </main>
      </div>
    </Layout>
  );
};

export default LandingPage;
