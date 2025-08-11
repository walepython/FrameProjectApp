// import React from 'react'
// import Navbar from './component/Navbar'
// import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
// import HeroSection from './component/Herosection';
// import About from './page/About';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar/>
//       <HeroSection/>
//       <Routes>
//         <Route path='/about'element={<About/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }
<BrowserRouter>
  <Navbar/>       // This is OUTSIDE the box, so it always shows.
  <HeroSection/>   // This is also OUTSIDE the box, so it always shows.
  <Routes>         // This is the magical box.
    <Route path='/about' element={<About/>}/>
  </Routes>
</BrowserRouter>
// ```When you go to /about, React Router renders the <About/> component inside the <Routes> box, but the <Navbar/> and <HeroSection/> are still there because they are not part of the routing logic.

// ### The Solution: Using a Layout Route with <Outlet/>

// We need to create a structure where:
// 1.  A "layout" component renders the shared UI (like your Navbar).
// 2.  This layout component has a placeholder (<Outlet/>) where the specific page content will be injected.
// 3.  The HeroSection is part of a HomePage component, so it only shows on the homepage.

// Here is the complete, corrected App.jsx file that implements this professional pattern.

// ---

// ### Corrected App.jsx

// Replace the entire content of your `App.jsx` file with this code. It's structured to be scalable and easy to understand.

// ```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartPage from './page/Cartpage';
// Import your components
import Navbar from './component/Navbar';
import HeroSection from './component/Herosection'; // Corrected the typo from 'Herosection'
import About from './page/About';
import HeroSection2 from './component/Herosection2';
import Footer from './component/Footer';
import Marketplace from './page/Marketplace';
import ArtDetailPage from './page/ArtDetailPage';


// --- Step 1: Create a Layout Component for pages that share the Navbar ---
// This component will render the Navbar and a placeholder for page-specific content.
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* The <Outlet> component from React Router will render the child route's element */}
        <Outlet />
        
      </main>
      
    </div>
  );
};

// --- Step 2: Create a dedicated component for your HomePage content ---
// This groups all the sections that should only appear on the homepage.
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HeroSection2/>
      <Footer/>
      {/* You could add your AfricaSection, AmericaSection, etc., here later */}
    </>
  );
};


// --- Step 3: Define the main App component with the correct routing structure ---
export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        
        {/* === This is the Layout Route === */}
        {/* It tells the router that any nested routes should use the MainLayout component. */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Child Route 1: The Homepage */}
          {/* `index` means this route matches the parent path exactly ("/") */}
          {/* It will render the HomePage component inside the MainLayout's <Outlet> */}
          <Route index element={<HomePage />} />

          {/* Child Route 2: The About Page */}
          {/* This route matches "/about" */}
          {/* It will render the About component inside the MainLayout's <Outlet> */}
          <Route path="about" element={<About />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="/marketplace/art/:slug" element={<ArtDetailPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* You can easily add more pages that need a Navbar here */}
          {/* <Route path="contact" element={<ContactPage />} /> */}

        </Route>

        {/* You could add routes for pages WITHOUT a Navbar here, like a login page */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
       
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}