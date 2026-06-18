import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
// Import your images

import imgp1 from '../assets/images/imgp1.png';
import imgp2 from '../assets/images/imgp2.jpg';
import imgp3 from '../assets/images/imgp3.jpg';
import imgp4 from '../assets/images/imgp4.jpg';
import imgp5 from '../assets/images/imgp5.png';
import imgp6 from '../assets/images/imgp6.png';
import imgp7 from '../assets/images/imgp7.png';
import imgp8 from '../assets/images/imgp8.png';
import imgp9 from '../assets/images/imgp9.png';
import imgp10 from '../assets/images/imgp10.png';
import imgp11 from '../assets/images/imgp11.png';
import imgp12 from '../assets/images/imgp12.png';
import imgp13 from '../assets/images/imgp13.png';
import imgp14 from '../assets/images/imgp14.png';
import imgp15 from '../assets/images/imgp15.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';
import img16 from '../assets/images/img16.jpg';
import imgp18 from '../assets/images/imgp18.jpg';
import imgp19 from '../assets/images/imgp19.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';


export default function Pastries() {
     const [filter, setFilter] = useState("All");
     const { addToCart } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
   
    const pastriesData = [
  { id: 1, name: "Croissant", category: "Flaky", image: imgp5, price: 85, desc: "Classic butter-laminated dough, proofed for 24 hours for ultimate honeycomb structure." },
  { id: 2, name: "Chocolate Éclair", category: "Choux", image: imgp6, price: 90, desc: "Delicate choux pastry piped with Madagascar vanilla bean cream and glazed with 70% dark chocolate." },
  { id: 3, name: "Strawberry Tart", category: "Seasonal", image: imgp7, price: 100, desc: "Sweet sablee crust filled with silky creme patissiere and topped with farm-fresh berries." },
  { id: 4, name: "Cream Puff", category: "Choux", image: imgp8, price: 100, desc: "Light-as-air profiteroles stuffed with freshly whipped chantilly and dusted with snow sugar." },
  { id: 5, name: "Baklava", category: "Phyllo", image: imgp9, price: 100, desc: "Mediterranean phyllo layers with crushed pistachios, walnuts, and orange blossom honey." },
  { id: 6, name: "Apple Turnover", category: "Puff", image: imgp10, price: 100, desc: "Caramelized Granny Smith apples encased in a shattering, sugar-crusted puff pastry." },
  { id: 7, name: "Cheese Danish", category: "Flaky", image: imgp11, price: 100, desc: "A tender danish pastry nestling a heart of sweet cream cheese and a hint of lemon zest." },
  { id: 8, name: "Donut Pastry", category: "Yeasted", image: imgp12, price: 100, desc: "Brioche-style dough, slow-fried and glazed with our signature wild honey and vanilla reduction." },
  { id: 9, name: "Mille-Feuille", category: "Puff", image: imgp13, price: 100, desc: "A 'thousand layers' of caramelized puff pastry alternating with rich crème mousseline." },
  { id: 10, name: "Banana Pastry Slice", category: "Sweet Slices", image: imgp14, price: 100, desc: "Moist banana-infused sponge topped with caramelized fruit and toasted hazelnut praline." }
];
const categories = ["All", "Flaky", "Choux", "Seasonal", "Phyllo", "Puff", "Yeasted", "Sweet Slices"];
const filteredItems = filter === "All" 
    ? pastriesData 
    : pastriesData.filter(item => item.category === filter);
      const [isModalOpen, setIsModalOpen] = useState(false);
    
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
    <div className="bg-[#fdfaf8] min-h-screen">

        {/* Header Section */}
              <nav className="flex items-center justify-between p-6 bg-white shadow-md sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-pink-600">Sweet Delights</h1>
                <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? 'X' : '☰'}
                </button>
                <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-white p-6 md:p-0 gap-6 flex-col md:flex-row shadow-md md:shadow-none`}>
                  <Link to="/home" className="text-xl font-bold hover:text-pink-500">Home</Link>
                  <Link to="/cakes" className="text-xl font-bold hover:text-pink-500">Cakes</Link>
                  <Link to="/pastries" className="text-xl font-bold text-pink-500">Pastries</Link>
                <Link to="/about" className="text-xl font-bold hover:text-pink-500">About Us</Link>
                  <Link to="/cart" className="text-xl font-bold hover:text-pink-500">Cart</Link>
                </div>
              </nav>
        
      {/* Image Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-2 px-4 py-8">
        <img src={imgp1} alt="Pastry 1" className="rounded-2xl w-full h-64 object-cover" />
        <img src={imgp2} alt="Pastry 2" className="rounded-2xl w-full h-64 object-cover" />
        <img src={imgp3} alt="Pastry 3" className="rounded-2xl w-full h-64 object-cover" />
        <img src={imgp4} alt="Pastry 4" className="rounded-2xl w-full h-64 object-cover" />
      </section>

      {/* Text Content Section */}
      <section className="px-10 py-12 text-left">
        <h1 className="text-5xl font-bold text-[#e15c82] mb-6">
          The Morning Collection
        </h1>
        <p className="text-gray-600 max-w-2xl text-xl leading-relaxed">
          Explore our curated selection of hand-rolled pastries, baked daily using 
          traditional French methods and premium stone-ground flour.
        </p>
      </section>
      
      {/* You can add your product list here following the logic from Cakes.jsx */}

      {/* Filter Buttons */}
      <div className="flex gap-4 my-8">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full ${filter === cat ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Render Filtered Items */}
      <div className="grid grid-cols-4 gap-6">
        {filteredItems.map((item) => (
  <div key={item.id} className="bg-white border rounded-2xl p-4 shadow-sm">
    <div className="relative">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl" />
      <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full uppercase">
        {item.category}
      </span>
    </div>
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <span className="font-bold text-pink-500">₹{item.price}</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
      <button onClick={() => addToCart(item)} className="w-full mt-4 bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition">
        Order Now
      </button>
    </div>
  </div>
))}
      </div>

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