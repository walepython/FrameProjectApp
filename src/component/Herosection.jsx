import React from 'react';

// Import icons from react-icons
import { FaPhone, FaPlay } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

// --- Sub-components adapted for a light background ---

const Headline = () => (
  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tighter ">
    Stress No More, Becuase
    <br />
    We Get What You
    <br />
    Are Looking For
  </h1>
);

const ActionButtons = () => (
  <div className="flex flex-wrap items-center gap-4 mt-8">
    <button className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 transition-opacity shadow-lg">
      Discover
    </button>
    <button className="px-8 py-3 flex items-center gap-2 rounded-full font-semibold text-blue-300 border-2 border-blue-400 hover:bg-blue-50 transition-colors hover:text-blue-600">
        <FaPhone className='text-blue-300 hover:text-blue-600'/>
      Contact Us
    </button>
    <button className="flex items-center space-x-2 text-gray-100 hover:text-blue-900">
      <FaPlay className="text-blue-500" />
      <span>Watch a video</span>
    </button>
  </div>
);

const Stats = () => (
    <div className="mt-12 space-y-6">
        {/* The stats card now has a subtle shadow and a semi-transparent white background */}
        <div className="flex flex-wrap gap-8 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md ">
            <div className="text-center">
                <p className="text-3xl font-bold text-gray-800">27k+</p>
                <p className="text-gray-700">Art works</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-slate-800">20k+</p>
                <p className="text-gray-700">Auctions</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-slate-800">7k+</p>
                <p className="text-gray-700">Artists</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 pb-4">
            {/* The avatar border is now white to contrast with the dark avatars */}
            <div className="flex -space-x-4">
                <img className="h-12 w-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="User 1" />
                <img className="h-12 w-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="User 2" />
                <img className="h-12 w-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="User 3" />
                <img className="h-12 w-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="User 4" />
                <img className="h-12 w-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" alt="User 5" />
            </div>
            <div>
                <p className="text-xl font-bold text-slate-100">40k+</p>
                <p className="text-gray-300">Active Users</p>
            </div>
        </div>
    </div>
);


// --- Main Hero Section Component ---
export default function HeroSection() {
  return (
    // THEME CHANGE: The main background is now a light gradient.
    <div className="bg-gradient-to-br from-white to-gray-100 font-sans bg-[url('/FB_IMG_1754597542450.jpg')] bg-cover bg-center ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Decorative background gradients are made more visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-transparent z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"></div>

        {/* Main Grid Layout */}
        <div className="flex flex-col-reverse  md:flex-row gap-12  items-center relative z-10 max-w-7xl lg:gap-16 ">
          
          {/* Left Column (Text Content) */}
          <div className="text-center md:text-left">
            <Headline />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                 In our marketplace  we have:{' '}<br></br>
                <span className="">
                 <Typewriter
                    words={['Original Paintings  Design For Sale', 'Mordern Sculpture Design For Sale', 'Fine Drawings For Sale']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </span>
                </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto md:mx-0 font-semibold" >
              The world's largest digital marketplace for Art frame Gallery collections.
            </p>
            <p className=" text-lg text-gray-200 max-w-lg mx-auto md:mx-0 font-semibold"> <span> O.M.A </span>Gallery is the best place to find Culture,mordern and indiginous feetable Art frame</p>
            <ActionButtons />
            <Stats />
          </div>

          {/* Right Column (NFT Card) */}
          <div className="w-full max-w-sm lg:mb-44 ml-5 lg:ml-40">
            {/* THEME CHANGE: Card now has a heavy shadow to "lift" it off the light background. */}
            <div className="p-1.5 bg-gradient-to-br from-gray-200 to-white/10 rounded-3xl shadow-2xl">
              <div className="bg-white p-2 rounded-2xl">
                {/* Image */}
                <img 
                  src="/art/frame-image-print.jpg" // Replace with your image
                  alt="Abstract NFT Art" 
                  className="w-full h-[400px] rounded-xl"
                />
                {/* THEME CHANGE: Card info uses a semi-transparent white background for a frosted look. */}
                <div className="p-4 bg-white/70 backdrop-blur-md rounded-b-xl relative -mt-10">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-xs text-gray-500">Ending in:</p>
                            <p className="font-bold text-slate-900">1h 20m 30s</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Highest Bid:</p>
                            <p className="font-bold text-slate-900">32.4 ETH</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="w-full py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700">Place a Bid</button>
                        <button className="w-full py-2 rounded-lg text-sm font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300">Purchase</button>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}