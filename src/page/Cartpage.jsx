// // src/pages/CartPage.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';

// // --- 1. IMPORT THE useCart HOOK ---
// // This is the key to accessing the cart's data and functions.
// import { useCart } from '../context/CartContext';

// // Import an icon for the remove button
// import { FaTrash } from 'react-icons/fa';

// export default function CartPage() {
//   // --- 2. GET EVERYTHING YOU NEED FROM THE CONTEXT ---
//   const { cartItems, removeFromCart, clearCart, itemCount, cartTotal } = useCart();

//   // --- 3. HANDLE THE "EMPTY CART" SCENARIO ---
//   if (itemCount === 0) {
//     return (
//       <div className="container mx-auto text-center py-20">
//         <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
//         <p className="text-gray-600 mb-8">Looks like you haven't added any art to your cart yet.</p>
//         <Link
//           to="/marketplace"
//           className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
//         >
//           Explore the Marketplace
//         </Link>
//       </div>
//     );
//   }

//   // --- 4. RENDER THE CART IF IT HAS ITEMS ---
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Cart Items List (takes up 2/3 of the space on large screens) */}
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
//             {cartItems.map(item => (
//               <div key={item.slug} className="flex items-center justify-between border-b py-4 last:border-b-0">
//                 <div className="flex items-center space-x-4">
//                   <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                   <div>
//                     <h3 className="font-semibold text-lg">{item.name}</h3>
//                     <p className="text-gray-500">Quantity: {item.quantity}</p>
//                   </div>
                  
//                 </div>
//                 <div className="flex items-center space-x-6">
                  
//                   <p className="font-semibold text-lg">₦{parseFloat(item.price.naira.replace(/,/g, '')) * item.quantity}</p>

//                   <div>
//                     <button onClick={() => onAdd(item)}>+</button>
//                     <button onClick={() => onRemove(item)} style={{marginLeft:'5px'}}>-</button>
//                 </div>
//                   <button 
//                     onClick={() => removeFromCart(item.slug)} 
//                     className="text-gray-500 hover:text-red-600 transition-colors"
//                     title="Remove Item"
//                   >
//                     <FaTrash size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary (takes up 1/3 of the space on large screens) */}
//           <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
//             <h2 className="text-xl font-bold border-b pb-4 mb-4">Order Summary</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal ({itemCount} items)</span>
//               <span className="font-semibold">₦{cartTotal.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between mb-4">
//               <span>Shipping</span>
//               <span className="font-semibold">Calculated at checkout</span>
//             </div>
//             <div className="border-t pt-4 flex justify-between font-bold text-lg">
//               <span>Total</span>
//               <span>₦{cartTotal.toLocaleString()}</span>
//             </div>
//             <button className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">
//               Proceed to Checkout
//             </button>
//             <button 
//               onClick={clearCart}
//               className="w-full mt-4 text-center text-red-600 font-semibold hover:underline"
//             >
//               Clear Cart
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, itemCount, cartTotal, increaseQuantity, decreaseQuantity ,cartTotal2} = useCart();

  if (itemCount === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any art to your cart yet.</p>
        <Link
          to="/marketplace"
          className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          Explore the Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {cartItems.map(item => (
              <div key={item.slug} className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center flex-col space-x-6">
                <div className="flex items-center gap-3 space-x-2 mt-2 ml-5 mb-3">
                      <button
                        onClick={() => decreaseQuantity(item.slug)}
                        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-300 text-white font-semibold"
                      >
                        -
                      </button>
                      <span className='font-bold'>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.slug)}
                        className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-300 text-white font-semibold"
                      >
                        +
                      </button>
                    </div>
                    <div className='flex gap-8'>
                  <p className="font-semibold text-lg">₦{(parseFloat(item.price.naira.replace(/,/g, '')) * item.quantity).toLocaleString()}</p>
                  <button 
                    onClick={() => removeFromCart(item.slug)} 
                    className="text-gray-500 hover:text-red-600 transition-colors"
                    title="Remove Item"
                  >
                    <FaTrash size={20} />
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        {/* Order Summary (takes up 1/3 of the space on large screens) */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-bold border-b pb-4 mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal ({itemCount} items)</span>
              <span className="font-semibold">₦{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="font-semibold">Calculated at checkout</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <div className='flex flex-col'>
              <span>₦{cartTotal.toLocaleString()}</span>
              <span>${cartTotal2.toLocaleString()}</span>
              </div>
              
            </div>
            <button className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">
              Proceed to Checkout
            </button>
            <button 
              onClick={clearCart}
              className="w-full mt-4 text-center text-red-600 font-semibold hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
