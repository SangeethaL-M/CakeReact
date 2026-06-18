import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import imgadv1 from '../assets/images/imgadv1.jpg';
import imgadv2 from '../assets/images/imgadv2.jpg';


export default function Cart() {
  // In Cart.jsx, update your useContext destructuring:
const { cartItems, updateQuantity } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);

  console.log("Context Value:", useContext(CartContext));
 const [menuOpen, setMenuOpen] = useState(false);
 // Calculate the subtotal by summing up (price * quantity) for all items
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Define constants for extra fees if needed
  const deliveryFee = 50;
  const taxes = 45;
  const total = subtotal + deliveryFee + taxes;
  const handlePlaceOrder = () => {
    alert("Order placed!");
    localStorage.removeItem('cart');
  };
  

  return (
    <div className="font-sans text-gray-900 bg-[#fff9f9] min-h-screen">
    

        <nav className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-pink-600">Sweet Delights</h1>
                <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? 'X' : '☰'}
                </button>
                <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-white p-6 md:p-0 gap-6 flex-col md:flex-row shadow-md md:shadow-none`}>
                  <Link to="/home" className="text-xl font-bold hover:text-pink-500">Home</Link>
                  <Link to="/cakes" className="text-xl font-bold hover:text-pink-500">Cakes</Link>
                  <Link to="/pastries" className="text-xl font-bold hover:text-pink-500">Pastries</Link>
                <Link to="/about" className="text-xl font-bold hover:text-pink-500">About Us</Link>
                  <Link to="/cart" className="text-xl font-bold text-pink-500">Cart</Link>
                </div>
              </nav>
           <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-10">  
      {/* Left Column: Review Order & Delivery Info */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-6">1. Review Your Order</h2>
        
        {cartItems.map(item => (
          
          <div key={item.id} className="flex border rounded-2xl p-4 mb-4 items-center">
            {console.log("Rendering item:", item)}
            <img src={item.image} className="w-24 h-24 rounded-xl" />
            <div className="ml-4 flex-grow">
                {console.log("Current Cart Items:", cartItems)}
              <h3 className="font-bold">{item.name}</h3>
              <p>₹{item.price}</p>
              <p className="text-sm text-gray-500">{item.weight} • {item.type}</p>
            </div>
            <div className="flex items-center border rounded-xl">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-3">-</button>
              <span className="px-3">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-3">+</button>
            </div>
          </div>
        ))}
        {console.log("Current Cart Items:", cartItems)}
        {/* Frequently bought together section */}
{/* Frequently bought together section */}
<div className="mt-10 p-4 md:p-6 bg-pink-100 rounded-2xl">
  <h3 className="font-bold text-xl mb-4">Frequently bought together</h3>
  
  {/* The 'flex-col' class makes it stack on mobile, 'md:flex-row' makes it side-by-side on desktop */}
  <div className="flex flex-col md:flex-row gap-4">
    
    <div className="bg-white p-4 rounded-xl flex items-center gap-4">
      <img src={imgadv1} alt="Premium Candles" className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-grow">
        <p className="font-semibold">Premium Candles</p>
        <p className="text-sm">₹150</p>
      </div>
      <button onClick={() => addToCart({ 
    id: 'candle-01', 
    name: 'Premium Candles', 
    price: 150, 
    image: '/src/assets/images/imgadv1.jpg' // Use the actual image path
  })} className="bg-pink-500 text-white px-4 py-1 rounded-xl">Add</button>
    </div>
    
    <div className="bg-white p-4 rounded-xl flex items-center gap-4">
      <img src={imgadv2} alt="Party Popper" className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-grow">
        <p className="font-semibold">Party Popper</p>
        <p className="text-sm">₹120</p>
      </div>
      <button onClick={() => addToCart({ 
    id: 'popper-01', 
    name: 'Party Popper', 
    price: 120, 
    image: '/src/assets/images/imgadv2.jpg' 
  })} className="bg-pink-500 text-white px-4 py-1 rounded-xl">Add</button>
    </div>
    
  </div>
</div>
        <form className="space-y-6">
  {/* Delivery Information */}
  <h2 className="text-2xl font-bold flex items-center gap-2">
    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">2</span> Delivery Information
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input type="text" placeholder="First Name" className="w-full p-3 border rounded-xl" />
    <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-xl" />
  </div>
  
  <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-xl" />
  <textarea placeholder="Complete Address" className="w-full p-3 border rounded-xl h-24" />
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input type="date" className="w-full p-3 border rounded-xl" />
    <input type="time" className="w-full p-3 border rounded-xl" />
  </div>
  
  <input type="text" placeholder="Message on Cake (Optional)" className="w-full p-3 border rounded-xl" />

  {/* Payment Method */}
  <h2 className="text-2xl font-bold flex items-center gap-2 mt-10">
    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full">3</span> Payment Method
  </h2>

  <div className="space-y-4">
    <label className="block p-4 border rounded-xl cursor-pointer hover:border-pink-500">
      <input type="radio" name="payment" className="mr-3" />
      Pay Online (Credit/Debit Card, UPI, Netbanking)
    </label>
    <label className="block p-4 border rounded-xl cursor-pointer hover:border-pink-500">
      <input type="radio" name="payment" className="mr-3" />
      Cash on Delivery
    </label>
  </div>
</form>
      </div>

      {/* Right Column: Order Summary & Place Order Button */}
      <div className="bg-white p-6 rounded-3xl border h-fit shadow-sm">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        {/* Calculate subtotal, delivery, taxes here */}
        <div className="flex justify-between py-2 border-b">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <button 
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-pink-500 text-white py-3 rounded-xl font-bold"
        >
          Place Order
        </button>
        <p className="text-center text-xs text-gray-400 mt-4">100% Secure Checkout</p>
      </div>
      </div>
    </div>
  );
}