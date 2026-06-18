import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import imgc1 from '../assets/images/imgc1.jpg';
import imgc2 from '../assets/images/imgc2.jpg';
import imgc3 from '../assets/images/imgc3.jpg';
import imgc4 from '../assets/images/imgc4.jpg';
import imgc5 from '../assets/images/imgc5.jpg';
import imgc6 from '../assets/images/imgc6.jpg';
import imgc7 from '../assets/images/imgc7.jpg';
import imgc8 from '../assets/images/imgc8.jpg';
import imgc9 from '../assets/images/imgc9.jpg';
import imgc10 from '../assets/images/imgc10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';
import img16 from '../assets/images/img16.jpg';
import imgp18 from '../assets/images/imgp18.jpg';
import imgp19 from '../assets/images/imgp19.jpg';

export default function Cakes() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
const cakes = [
    { id: 3, name: "Chocolate Truffle", price: 850, image: imgc3 },
    { id: 4, name: "Red Velvet", price: 850, image: imgc4 },
    { id: 5, name: "Black Forest", price: 850, image: imgc5 },
    { id: 6, name: "Pineapple Delight", price: 850, image: imgc6},
    { id: 7, name: "Chocolate Truffle", price: 850, image: imgc7},
    { id: 8, name: "Red Velvet", price: 850, image: imgc8 },
    { id: 9, name: "Black Forest", price: 850, image: imgc9 },
    { id: 10, name: "Pineapple Delight", price: 850, image: imgc10 },
]
  const BookingModal = ({ isOpen, onClose, itemName }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Pink Background Container matching Screenshot (2011).jpg */}
      <div className="bg-[#ffafc3] p-8 rounded-2xl w-full max-w-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-2">Place Your Order</h2>
        <p className="text-center text-sm mb-6">
          Fill out the form below and our bakery team will get back to you to confirm your order details.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" className="w-full p-3 rounded-lg border-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" className="w-full p-3 rounded-lg border-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Select Flavour</label>
            <select className="w-full p-3 rounded-lg border-none">
              <option>Chocolate</option>
              <option>Vanilla</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Event Type</label>
            <input type="text" className="w-full p-3 rounded-lg border-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Special Instructions / Message</label>
            <textarea className="w-full p-3 rounded-lg border-none h-24"></textarea>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition"
          >
            Submit Order Request
          </button>
        </div>
      </div>
    </div>
  );
};
  return (
    <div className="font-sans text-gray-900 bg-[#fff9f9] min-h-screen">
      {/* Header Section */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-600">Sweet Delights</h1>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'X' : '☰'}
        </button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-white p-6 md:p-0 gap-6 flex-col md:flex-row shadow-md md:shadow-none`}>
          <Link to="/home" className="text-xl font-bold hover:text-pink-500">Home</Link>
          <Link to="/cakes" className="text-xl font-bold text-pink-500">Cakes</Link>
          <Link to="/pastries" className="text-xl font-bold hover:text-pink-500">Pastries</Link>
        <Link to="/about" className="text-xl font-bold hover:text-pink-500">About Us</Link>
          <Link to="/cart" className="text-xl font-bold hover:text-pink-500">Cart</Link>
        </div>
      </nav>


{/* --- Feature Image Section --- */}
<section className="px-10 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
  <img 
    src={imgc1} 
    alt="Feature Cake 1" 
    className="w-full h-full object-cover rounded-xl" 
  />
  <img 
    src={imgc2} 
    alt="Feature Cake 2" 
    className="w-full h-full object-cover  rounded-xl" 
  />
</section>
      {/* Hero Title Section */}
      <section className="p-10">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">The Cake Flavours</h2>
        <p className="text-gray-600 text-xl">Explore our curated selection of hand-rolled pastries, baked daily using
traditional French methods and premium stone-ground flour.</p>
      </section>

      {/* Product Grid */}
      <main className="p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {cakes.map((cake) => (
            <div key={cake.id} className="bg-white p-4 rounded-xl border shadow-sm">
              {/* 3. Use the image variable here */}
              <img src={cake.image} alt={cake.name} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-pink-600 font-bold">{cake.name}</h3>
            <p className="text-gray-600 ">Rich, dense chocolate layers coated in a smooth ganache</p>
            <p className="text-pink-600 font-bold mb-4">₹850</p>
            <button onClick={() => addToCart(cake)} className="w-full bg-pink-600 text-white py-2 rounded-xl font-bold hover:bg-pink-700 transition">
              Order Now
            </button>
          </div>
        ))}
      </main>
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

<section className="px-10 py-16 bg-[#fdfaf8]">
  {/* Add max-w-6xl and mx-auto to center everything */}
  <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Limit the image container width on desktop */}
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
      <img src={imgp18} className="rounded-2xl w-full object-cover" />
      <img src={imgp19} className="rounded-2xl w-full object-cover" />
    </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <span className="text-sm font-semibold text-orange-400 bg-orange-50 px-3 py-1 rounded-full">
            ✨ Special Events
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
            We accept birthday party & orders
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Make your celebrations unforgettable with our exquisite range of custom cakes. 
            From intimate birthdays to grand gatherings, we bring your sweet visions to life.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-700">✓ Customized Birthday Cakes</li>
            <li className="flex items-center text-gray-700">✓ Unique Themed Designs</li>
            <li className="flex items-center text-gray-700">✓ Bulk Party Orders & Dessert Tables</li>
          </ul>

          <button onClick={() => setIsModalOpen(true)}
        
            className="bg-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-pink-600 transition"
          >
            Book Now
          </button>
          
<BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        itemName="Birthday Cake" 
      />
        </div>
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
  );
}