import React from 'react';
import { Link } from 'react-router-dom';

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


export default function Footer() {
  return (
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
          <p>© {new Date().getFullYear()}  O.M.A Gallery. All Rights Reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}