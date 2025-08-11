import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// --- CONTEXT ---
import { useCart } from '../context/CartContext';

// --- ICONS ---
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// --- LOGO COMPONENT ---
const Logo = () => (
  <NavLink to="/" className="flex items-center space-x-2">
    <span className="text-2xl font-bold tracking-wider text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md px-1">O.M.A</span>
    <span className="text-white text-xl font-bold">Gallery</span>
  </NavLink>
);


export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart(); // Get cart item count from context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Marketplace', href: '/marketplace' },
    { title: 'Artists', href: '/artists' },
    { title: 'News', href: '/news' },
  ];
  const handleSearch = () => {
    if (!searchTerm.trim()) return; // Ignore empty searches
    navigate(`/marketplace?query=${encodeURIComponent(searchTerm)}`);
    // Example: navigate(`/marketplace?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                className={({ isActive }) => `relative font-medium text-gray-300 hover:text-white transition-colors duration-300 ${isActive ? 'text-white' : ''}`}
              >
                {({ isActive }) => (
                  <>
                    {link.title}
                    {isActive && <span className="absolute left-0 -bottom-2 block h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

            {/* Right side buttons - Desktop */}
            <div className="hidden md:flex items-center ">
              {/* Search Button */}
              <div className="flex items-center  p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ">
                <input onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-slate-400 text-gray-100 px-4 py-2 rounded-full focus:outline-none"
                />
                <button onClick={handleSearch} className="text-white flex items-center px-1 py-2">
                  <FiSearch />
                  <span>Search</span>
                </button>
              </div>
            </div>

          <div className='flex  flex-row-reverse'>
            {/* Register Button */}
            <NavLink
              to="/register"
              className="hidden md:flex px-3 py-2 rounded-full text-white mt-1 ml-12 font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Register
            </NavLink>

            {/* --- CORRECTED CART LINK --- */}
            <NavLink to="/cart" className="relative text-gray-300 hover:text-white p-2 hidden md:flex">
              <FiShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Add cart link for mobile as well */}
            <NavLink to="/cart" className="relative text-gray-300 hover:text-white p-2 mr-2">
              <FiShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </NavLink>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                onClick={toggleMobileMenu}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium w-full text-center ${isActive ? 'bg-slate-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {link.title}
              </NavLink>
            ))}
            
            <div className="border-t border-gray-700 w-full my-4"></div>
            {/* Mobile buttons */}
            <div className="flex items-center space-x-4 mb-4">
              <button className="flex items-center space-x-2 bg-slate-800 text-gray-300 px-4 py-2 rounded-full hover:text-white">
                <FiSearch />
                <span>Search</span>
              </button>
              <NavLink
                to="/register"
                onClick={toggleMobileMenu}
                className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
