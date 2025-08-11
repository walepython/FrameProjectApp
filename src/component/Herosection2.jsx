import React from 'react';

// You can replace this with an actual image of the artist/gallery
const artistImageUrl = "https://i.pinimg.com/1200x/d5/0a/75/d50a75eef8e580e2f35a43b001ab0cc3.jpg"; 

const artistImage2 = "/art/FB_IMG_1745909192171.jpg"

// --- NEW: A sub-component for the Call to Action section ---
const CallToAction = () => (
  <div className="text-center py-16">
    <button className="px-8 py-3 rounded-full font-semibold italic text-gray-700 border-2 border-gray-400 hover:border-gray-800 hover:bg-gray-100 transition-all duration-300">
      Visit Online Gallery
    </button>
    <h2 className="mt-6 text-3xl font-bold text-gray-800 tracking-tight">
      Get Art That Gives Back.
    </h2>
    <p className="max-w-4xl mx-auto mt-4 text-2xl text-gray-600 leading-relaxed lg:text-2xl">
      Explore our nonprofit art gallery and shop meaningful, affordable art by emerging and established artists. Every purchase includes free shipping and is a tax-deductible donation that directly supports our artists.
    </p>
    <button className="mt-8 px-8 py-3 rounded-full font-semibold italic text-gray-700 border-2 border-gray-400 hover:border-gray-800 hover:bg-gray-100 transition-all duration-300">
      Sign Up For 10% Off Today
    </button>
  </div>
);

// --- NEW: A sub-component for the "Who We Are" section ---
const WhoWeAre = () => (
    <div className="grid md:grid-cols-2 gap-12 items-center my-16">
        {/* Left Column: Text */}
        <div className="md:col-span-1">
            <h2 className="text-4xl font-bold italic text-gray-800 mb-6">
                Who We Are
            </h2>
            <p className="text-gray-700 leading-tight text-2xl">
                At The O.M.A Gallery, we believe art has the power to connect and transform lives. As a trusted nonprofit for over 5 years, our free community events, art programs, thoughtfully curated exhibitions, and affordable online gallery make art accessible to everyone.
            </p>
            <div className="md:col-span-1">
            <p className="text-2xl text-gray-700 leading-tight mb-6 mt-8">
                Founded in Lagos Nigeria,  The O.M.A Gallery is a 501(c)(3) nonprofit organization that leads artists with adversity to success and transforms communities through art.
            </p>
            <button className="px-6 py-2 rounded-full font-semibold italic text-gray-700 border-2 border-gray-500 hover:border-gray-900 hover:bg-gray-100 transition-all duration-300">
                Learn More About Our Mission
            </button>
        </div>
            {/* You can add a "Learn More" button here if you like */}
            {/* <button className="mt-6 font-semibold text-blue-600 hover:underline">Learn More →</button> */}
        </div>
        {/* Right Column: Image */}
        <div className="md:col-span-1">
            <img 
              src={artistImage2} 
              alt="Inside The Art Spread gallery" 
              className="rounded-lg shadow-xl object-cover w-full h-[450px]"
            />
        </div>
    </div>
);




// --- NEW: Component for the "What We Do" section ---
const WhatWeDo = () => (
    <div className="grid md:grid-cols-2 gap-12 items-center my-16">
      <div className="md:col-span-1">
            <img 
              src={artistImageUrl} 
              alt="Mary Adebayo, Founder of O.M.A Gallery" 
              className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
            />
          </div>
      <div className='w-[500px]'>
        <h2 className="text-3xl font-bold italic text-gray-800 mb-8">
            What We Do
        </h2>
        <div className="space-y-8  ">
            <div>
                <h3 className="text-2xl font-semibold text-gray-700">We uplift spaces</h3>
                <p className="max-w-3xl mt-2 lg:text-1xl text-md text-gray-600 leading-relaxed mx-auto md:mx-0">
                    In our vibrant online gallery, you can explore and shop for high-quality artwork on any budget. Transform your space by shopping original art and fine art prints from $40 to $4,000.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-700">We uplift places</h3>
                <p className="max-w-3xl mt-2 lg:text-1xl text-md text-gray-600 leading-relaxed mx-auto md:mx-0">
                    Our community programs and public art initiatives bring creativity and inspiration to public places, fostering a connection between artists and their local environment.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-700">We uplift people</h3>
                <p className="max-w-3xl mt-2 lg:text-1xl text-md text-gray-600 leading-relaxed mx-auto md:mx-0">
                We showcase art for sale by artists who experience mental illness, physical disabilities, and social barriers.  Through our free tools and services we help artists advance their careers, gain new skills, and earn financial stability.
                </p>
            </div>
        </div>
        </div>
        
    </div>
);


// --- The Main Combined Page Component ---
export default function HeroSection2() {
  return (
    // Using a simple, clean white background
    <div className="bg-white font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The new Call to Action section is placed here */}
        <CallToAction />

        {/* A subtle divider line */}
        <div className=" w-full max-w-5xl bg-gray-500 h-1"></div>
        
        {/* The "Who We Are" section from your previous build */}
        
        <WhoWeAre />
        <div>
        <WhatWeDo/>
        </div>
        


      </div>
    </div>
  );
}