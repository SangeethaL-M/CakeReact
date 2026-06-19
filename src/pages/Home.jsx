import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';
import img16 from '../assets/images/img16.jpg';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  const cakes = [
    { id: 2, name: "Chocolate Truffle", price: 850, image: img2 },
    { id: 3, name: "Red Velvet", price: 850, image: img3 },
    { id: 4, name: "Black Forest", price: 850, image: img4 },
    { id: 5, name: "Pineapple Delight", price: 850, image: img5 },
  ];
  const pastries = [
  { id: 6, name: "Cupcake Box", price: 450, image: img6 },
  { id: 7, name: "Chocolate Brownie", price: 300, image: img7 },
  { id: 8, name: "Cheesecake Slice", price: 350, image: img8 },
  { id: 9, name: "Macaron Tower", price: 600, image: img9 },
];

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">Sweet Delights</h1>
        
        {/* Toggle Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Links */}
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-white p-6 md:p-0 flex-col md:flex-row gap-6 shadow-lg md:shadow-none`}>
          <Link to="/" className="text-xl font-bold text-pink-500">Home</Link>
          <Link to="/cakes" className="text-xl font-bold hover:text-pink-500">Cakes</Link>
          <Link to="/pastries" className="text-xl font-bold hover:text-pink-500">Pastries</Link>
          <Link to="/about" className="text-xl font-bold hover:text-pink-500">About Us</Link>
          <Link to="/cart" className="text-xl font-bold hover:text-pink-500">Cart</Link>
        </div>
      </nav>

      {/* HERO SECTION - Freshly Baked */}
      <section className="relative bg-[#fff9f9] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl md:text-6xl font-medium text-gray-800 ">
            Freshly Baked <br /> Happiness <br/> Delivered to your<br/> Door<br/>
          </h2>
          <p className="text-lg  text-gray-600">
            Experience the finest cakes and pastries crafted with love. Delivering artisanal cakes and pastries directly to your doorstep. Every bite is a celebration!
          </p>
          <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition">
            Order Now
          </button>
        </div>
        <div className="md:w-1/3 mt-10 md:mt-0">
          <img src={img3} alt="Hero Cake" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
        </div>
      </section>

      {/* Sticky Christmas Offer */}
      <div className="fixed bottom-6 right-6 bg-pink-500 text-white p-4 rounded-lg shadow-2xl z-40 font-bold border-2 border-white animate-pulse">
        🎄 Christmas offer 25%
      </div>

      {/* Products Grid */}
      <main className="p-6 bg-[#F3E9E9]">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Signature Flavours</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <div key={cake.id} className="bg-white p-4 rounded-xl border shadow-sm">
              {/* 3. Use the image variable here */}
              <img src={cake.image} alt={cake.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-pink-600 font-bold">{cake.name}</h3>
              <p className="text-gray-600 ">Rich, dense chocolate layers coated in a smooth ganache</p>
              <p className="text-pink-600 font-bold">₹{cake.price}</p>
              <button onClick={() => addToCart(cake)} className="w-full bg-pink-500 text-white py-2 mt-4 rounded">ADD TO CART</button>
            </div>
          ))}
        </div>
        {/*Sub Section*/}
        <h2 className="mt-2 text-4xl font-bold mb-12 text-gray-800 text-center">Delightful Pastries</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
    {pastries.map((item) => (
      <div key={item.id} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col items-center text-center">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl mb-4" />
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-pink-600 font-bold text-xl mb-4">₹{item.price}</p>
        <button onClick={() => addToCart(item)} className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700 transition">
          ADD TO CART
        </button>
      </div>
    ))}
  </div>
      </main>

 
      
{/*Section 2*/}
      <section className="bg-[#FFF3E6] py-20 pt-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Behind the Scenes</h2>
    <p className="text-gray-600 mb-12">
      Made in a clean and hygienic kitchen with premium ingredients. 
      Our bakers pour their passion into every single creation.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { img: img11, title: "Baking with Care" },
        { img: img12, title: "Artistic Decoration" },
        { img: img13, title: "Safe Packaging" }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Circular Image Container */}
          <div className="w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg border-4 border-white">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>
{/*Section 3*/}
<div className="bg-[#FFF7F5]">
<section className="bg-[#F6BCD1] p-8 md:p-16 rounded-3xl mx-6 my-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
  {/* Left Side: Text and Features */}
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-800">Freshness Delivered Quickly</h2>
    <ul className="space-y-4">
      <li className="flex items-center text-xl gap-3">
        <span>🕒</span> Fast delivery within 60 minutes
      </li>
      <li className="flex items-center text-xl gap-3">
        <span>📦</span> Safe and secure packaging
      </li>
      <li className="flex items-center text-xl gap-3">
        <span>📍</span> Live order tracking
      </li>
    </ul>
  </div>

  {/* Right Side: Delivery Icon (SVG) */}
  <div className="mt-8 md:mt-0">
    <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
      <circle cx="8.5" cy="17.5" r="3.5"></circle>
      <circle cx="17.5" cy="17.5" r="3.5"></circle>
      <path d="M15 17.5V13H10l-2-2 2-2h4l2 2 2-2v4"></path>
      <path d="M14 9V5a1 1 0 0 0-1-1H7"></path>
    </svg>
  </div>
  </section>

{/* What Our Customers Say */}
<section className="py-20 px-6 bg-[#FFF7F5]">
  <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { img: img14, name: "Sarah Jenkins", role: "Verified Buyer", text: "The best chocolate truffle I have ever had! The delivery was perfectly on time and the packaging kept the cake completely intact. Highly recommend!" },
      { img: img15, name: "Michael Roberts", role: "Event Booking", text: "We ordered a custom themed cake for my daughter's birthday. It looked absolutely stunning and tasted heavenly. Thank you for making her day special." },
      { img: img16, name: "Emily Chen", role: "Verified Buyer", text: "Their macarons are to die for! So fresh and the perfect texture. The hygiene and quality standards they maintain are truly impressive." }
    ].map((review, i) => (
      <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
        <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
        <div className="flex items-center gap-4">
          <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-bold">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Footer Section */}
<footer className="py-12 bg-[#FFF7F5] text-center border-t">
  <div className="flex items-center justify-center gap-2 mb-4">
    <span className="text-2xl">🍰</span>
    <h3 className="text-xl font-bold text-pink-600">Sweet Delights</h3>
  </div>
  <p className="text-gray-600 mb-4">Freshly baked happiness delivered to your door.</p>
  <p className="text-sm text-gray-400">© 2025 Sweet Delights Bakery. All rights reserved.</p>
</footer>
</div>
    </div>
  );
}