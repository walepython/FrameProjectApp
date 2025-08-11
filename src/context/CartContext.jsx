// // src/context/CartContext.js

// import React, { createContext, useState, useContext, useEffect } from 'react';

// // 1. Create the context
// const CartContext = createContext();

// // 2. Create a custom hook for easy access to the context
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // 3. Create the Provider component
// export const CartProvider = ({ children }) => {
//   // We initialize the state by trying to get the cart from localStorage
//   const [cartItems, setCartItems] = useState(() => {
//     try {
//       const localData = localStorage.getItem('cart');
//       return localData ? JSON.parse(localData) : [];
//     } catch (error) {
//       console.error("Could not parse cart from localStorage", error);
//       return [];
//     }
//   });

//   // Whenever cartItems changes, we save it to localStorage
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       // Check if the item is already in the cart
//       const existingItem = prevItems.find(item => item.slug === product.slug);

//       if (existingItem) {
//         // If it exists, map over the items and increase the quantity of the matching item
//         return prevItems.map(item =>
//           item.slug === product.slug
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // If it's a new item, add it to the array with a quantity of 1
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//     console.log(`Added ${product.name} to cart!`);
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (slug) => {
//     setCartItems(prevItems => prevItems.filter(item => item.slug !== slug));
//   };
  
//   // Function to clear the entire cart
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   // We can calculate derived state like total items and total price
//   const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
//   // Note: Parsing price with comma. A number format would be better in real data.
//   const cartTotal = cartItems.reduce((total, item) => {
//     const price = parseFloat(item.price.naira.replace(/,/g, ''));
//     return total + (price * item.quantity);
//   }, 0);


//   // The value object holds everything we want to expose to our components
//   const value = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     clearCart,
//     itemCount,
//     cartTotal,
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const itemExists = prev.find((item) => item.slug === product.slug);
      if (itemExists) {
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (slug) => {
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const increaseQuantity = (slug) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (slug) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.naira.replace(/,/g, "")) * item.quantity,
    0
  );
  const cartTotal2 = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.usd) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount,
        cartTotal,
        cartTotal2,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

