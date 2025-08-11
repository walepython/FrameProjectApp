// src/page/ArtDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marketData } from '../data/marketData'; // Import the shared data
import { useCart } from '../context/CartContext';

export default function ArtDetailPage() {
   const { addToCart } = useCart();
  // 1. Get the slug from the URL using React Router's useParams hook
  const { slug } = useParams();

  // 2. Find the specific art object from our data array that matches the slug
  const art = marketData.find((item) => item.slug === slug);

  // 3. Handle the case where the art isn't found
  if (!art) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Artwork Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the artwork you're looking for.</p>
        <Link to="/marketplace" className="mt-6 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700">
          Back to Marketplace
        </Link>
      </div>
    );
  }
   

  // 4. Render the details if the art is found
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Image */}
          <div>
            <img 
              src={art.image} 
              alt={`Artwork named ${art.name}`}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Right Column: Details */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              {art.text}
            </p>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              {art.name}
            </h1>
            <div className="mt-6">
              <h2 className="sr-only">Price information</h2>
              <div className="flex items-baseline">
                <p className="text-3xl font-bold text-gray-900">
                  ₦{art.price.naira}
                </p>
                <p className="ml-3 text-lg text-gray-500">
                  (${art.price.usd} USD)
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-gray-800">Description</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {art.description}
              </p>
            </div>
            
            <div className="mt-10">
            <button
                    onClick={() => addToCart(art)}
                    className="block w-full text-center bg-pink-500 text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition-colors"
                  >
                    Add to Cart
                  </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}