import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { marketData } from '../data/marketdata';
import { motion, useInView } from 'framer-motion';
import {FiShoppingCart } from 'react-icons/fi'

// --- Import Cart Context ---
import { useCart } from '../context/CartContext';

export default function Marketplace() {
  const { addToCart } = useCart();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("query")?.toLowerCase() || "";

  const filteredProducts = marketData.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Marketplace
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Explore our curated collection of original art and fine art prints from talented artists.
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((item, index) => {
            const ref = useRef(null); // unique ref for each card
            const isInView = useInView(ref, { once: false, amount: 0.1 }); // animate once when 20% visible

            return (
              <motion.div
                key={item.slug}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1, // stagger
                }}
                className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={`Artwork named ${item.name}`}
                    className="w-full h-96 object-cover lg:h-72"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    {item.text}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <p className="text-xl font-semibold text-gray-900">
                      ₦{item.price.naira}
                    </p>
                    <p className="ml-2 text-sm text-gray-500">
                      (${item.price.usd} USD)
                    </p>
                  </div>

                  <div className="mt-6 mt-auto flex flex-col space-y-2">
                    <Link
                      to={`/marketplace/art/${item.slug}`}
                      className="block w-full text-center bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition-colors"
                    >
                      View Details
                    </Link>
                    <button id='button'
                      onClick={() => addToCart(item)}
                      className=" block w-full text-center bg-pink-500 text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition-colors flex items-center pl-44 gap-5 lg:flex-row lg:pl-10"
                    >
                      <FiShoppingCart className='font-semibold text-lg'/>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
