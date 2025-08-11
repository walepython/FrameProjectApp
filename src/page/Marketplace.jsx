import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { marketData } from "../data/marketData.js";
import { motion, useInView } from 'framer-motion';
import {FiShoppingCart } from 'react-icons/fi'

// --- Import Cart Context ---
import { useCart } from '../context/CartContext';



// Importing icons from react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// A reusable component for the logo or brand name
const Brand = () => (
    <div>
        <h3 className="text-2xl font-bold italic text-gray-100">The O.M.A Gallery</h3>
        <p className="mt-2 text-gray-400 max-w-xs">
            A nonprofit organization dedicated to uplifting artists and transforming communities through art.
        </p>
    </div>
);

// A reusable component for a single social media icon link
const SocialIcon = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-900 hover:border-purple-900  border-2 rounded-lg p-1  transition-colors duration-300">
        {icon}
    </a>
);


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
                      className="block w-full text-center bg-pink-500 text-white font-semibold py-3 rounded-md hover:bg-pink-600 transition-colors flex items-center pl-44 gap-5 lg:flex-row lg:pl-10"

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
      <footer className="bg-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
      
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <Brand />
            <div className="flex space-x-5 mt-6">
                <SocialIcon href="#" icon={<FaFacebookF size={20} />} />
                <SocialIcon href="#" icon={<FaTwitter size={20} />} />
                <SocialIcon href="#" icon={<FaInstagram size={20} />} />
                <SocialIcon href="#" icon={<FaLinkedinIn size={20} />} />
            </div>
          </div>
      
          {/* Column 2: Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-100 tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-gray-900">Gallery</Link></li>
              <li><Link to="/artists" className="text-gray-400 hover:text-gray-900">Artists</Link></li>
              <li><Link to="/mission" className="text-gray-400 hover:text-gray-900">Our Mission</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-100 tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li>info@O.M.AGallery.org</li>
              <li>08138303357</li>
              <li>LAGOS NIGERIA</li>
            </ul>
          </div>
      
          {/* Column 4: Newsletter Signup */}
          <div className="md:col-span-4 lg:col-span-1">
             <h4 className="font-semibold text-gray-100 tracking-wider uppercase">Stay Updated</h4>
             <p className="mt-4 text-gray-400">Subscribe to our newsletter to get the latest updates on new art and exhibitions.</p>
             <form className="mt-4 flex flex-col sm:flex-row">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    required
                />
                <button type="submit" className="mt-2 sm:mt-0 sm:-ml-px px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md   transition-colors">
                    Subscribe
                </button>
             </form>
          </div>
        </div>
      
        {/* Bottom Bar: Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} The O.M.A Gallery. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      
      </div>
      </footer>
    </div>
    
  );
}
