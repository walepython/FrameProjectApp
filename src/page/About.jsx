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
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-900 hover:border-purple-900 hover:p-2 border-2 rounded-lg p-1  transition-colors duration-300">
        {icon}
    </a>
);
// You can replace this with an actual image of the artist
const artistImageUrl = "/art/FB_IMG_1754683998753.jpg"; 
const artistImage2 = "/art/FB_IMG_1745909192171.jpg"

export default function About() {
  return (
    <div className="bg-white font-serif">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Our Story: The Vision Behind O.M.A Gallery
          </h1>
          <hr className="w-24 h-1 mx-auto my-6 bg-purple-600 border-0 rounded" />
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            At O.M.A Gallery, we are dedicated to celebrating the vibrant and diverse artistic expressions emerging from Nigeria and across the African continent. Our mission is to provide a platform for visionary artists to share their stories, challenge perspectives, and connect with a global audience of art lovers and collectors.
          </p>
        </div>

        {/* Founder Section - Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 items-center my-16">
          
          {/* Artist Image */}
          <div className="md:col-span-1">
            <img 
              src={artistImageUrl} 
              alt="Mary Adebayo, Founder of O.M.A Gallery" 
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
            />
          </div>

          {/* Artist Bio */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet the Founder: Mary Adebayo
            </h2>
            <p className="text-gray-700 leading-loose mb-4">
              The creative force behind O.M.A Gallery is Mary Adebayo, an artist whose journey was born from a lifelong passion for visual storytelling. Her vision and dedication are the cornerstones of our gallery's ethos.
            </p>
            <p className="text-gray-700 leading-loose">
              Born in the rich cultural landscape of Osun-State, Nigeria, Mary's fascination with art began in childhood. She was captivated by the power of graphite drawing, meticulously honing her skills and developing a unique artistic voice from a young age.
            </p>
          </div>
        </div>

        {/* Continued Bio and Education */}
        <div className="space-y-6 text-gray-700 leading-loose text-lg">
           <p>
            As she matured as an artist, Mary continuously evolved her technique. In 2008, she embarked on a new phase of artistic production, moving beyond her foundational work to explore new mediums and themes. 
           </p>
           <p>
            This period of growth was underpinned by a strong academic foundation; Mary earned her Master’s degree with First-Class Honours from the Academy of Fine Arts at <strong className="font-semibold text-gray-900">Ladoke Akintola University of Technology (LAUTECH)</strong> and further enriched her expertise through an arts program at the prestigious <strong className="font-semibold text-gray-900">Obafemi Awolowo University (O.A.U)</strong>.
           </p>
           <p className="font-semibold text-xl text-center text-gray-800 pt-4">
            O.M.A Gallery is the culmination of her journey—a space built to champion creativity, foster talent, and honor the profound narratives embedded in art.
           </p>
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