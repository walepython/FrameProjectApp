// src/components/ProductCard.jsx

import React from 'react';
import { useCart } from '../context/CartContext'; // The magic hook!

export default function ProductCard({ product }) {
  // Use the hook to get the addToCart function from our context
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">{`₦${product.price.naira}`}</p>
        <button
          onClick={() => addToCart(product)} // Call the function on click
          className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
