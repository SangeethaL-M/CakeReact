import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import imgabt1 from '../assets/images/imgabt1.jpg';
import imgabt2 from '../assets/images/imgabt2.jpg';
import imgabt3 from '../assets/images/imgabt3.jpg';
import imgabt4 from '../assets/images/imgabt4.jpg';

export default function Cakes() {
  const [menuOpen, setMenuOpen] = useState(false);
  const bakers = [
    { name: "Chef Elena", role: "Head Pastry Chef", img: imgabt2, bio: "Specializing in French techniques with 15 years of experience." },
    { name: "Chef Marcus", role: "Artisan Baker", img: imgabt3, bio: "A master of sourdough and traditional stone-ground bread making." },
    { name: "Chef Sarah", role: "Cake Decorator", img: imgabt4, bio: "Bringing creative visions to life with intricate sugar-craft skills." }
  ];
  const navigate = useNavigate();
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
            <Link to="/cakes" className="text-xl font-bold hover:text-pink-500">Cakes</Link>
            <Link to="/pastries" className="text-xl font-bold hover:text-pink-500">Pastries</Link>
          <Link to="/about" className="text-xl font-bold text-pink-500">About Us</Link>
            <Link to="/cart" className="text-xl font-bold hover:text-pink-500">Cart</Link>
          </div>
        </nav>

    <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2">
          <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Our Story
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Sweet Memories Since 2010
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            What started as a small home kitchen experiment has blossomed into the city's most loved premium bakery. 
            At Sweet Delights, we believe that every cake tells a story and every pastry holds a piece of magic.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our founder, guided by a passion for authentic flavors and artistic presentation, built this 
            bakery on one simple principle: never compromise on quality. Today, that principle still 
            guides everything we do.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2">
          <img 
            src={imgabt1} 
            alt="Sweet Delights Bakery Interior" 
            className="w-full h-auto rounded-3xl shadow-lg" 
          />
        </div>

      </div>
      </div>
  
<section className="py-16 px-6 bg-[#FFF3E6]">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Our commitment to excellence goes beyond just baking. It's about delivering a truly premium, hygienic, and unforgettable experience.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
      <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500">
        {/* Placeholder for star icon */}
        <span>✨</span> 
      </div>
      <h3 className="text-xl font-bold mb-4">Premium Ingredients</h3>
      <p className="text-gray-600">We source only the finest chocolates, freshest farm fruits, and purest vanilla to ensure every bite is bursting with authentic flavor.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
      <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500">
        {/* Placeholder for shield icon */}
        <span>🛡️</span>
      </div>
      <h3 className="text-xl font-bold mb-4">Uncompromised Hygiene</h3>
      <p className="text-gray-600">Baked in a spotless, modern kitchen. We follow rigorous safety and sanitization standards because your health is our priority.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
      <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500">
        {/* Placeholder for heart icon */}
        <span>❤️</span>
      </div>
      <h3 className="text-xl font-bold mb-4">Baked with Love</h3>
      <p className="text-gray-600">Our team of expert chefs pours their heart and soul into every recipe, ensuring each creation is as beautiful as it is delicious.</p>
    </div>
  </div>
</section>

<section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Meet Our Master Bakers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bakers.map((baker, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border text-center hover:shadow-md transition">
            <img src={baker.img} alt={baker.name} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover" />
            <h3 className="text-2xl font-bold mb-2">{baker.name}</h3>
            <p className="text-pink-500 font-semibold mb-4">{baker.role}</p>
            <p className="text-gray-600 text-sm">{baker.bio}</p>
          </div>
        ))}
      </div>
    </section>

<section className="py-20 bg-pink-200 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to experience the magic of Sweet Delights?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Explore our full collection of artisanal cakes and pastries, baked fresh just for you.
        </p>
        
        {/* Navigation Button */}
        <button 
          onClick={() => navigate('/home')}
          className="bg-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg"
        >
          Explore Collection
        </button>
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