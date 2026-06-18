import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, you would validate here
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff9f9]">
      <form onSubmit={handleRegister} className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
        
        <input required type="text" placeholder="Full Name" className="w-full p-3 mb-4 border rounded-xl" />
        <input required type="email" placeholder="Email Address" className="w-full p-3 mb-4 border rounded-xl" />
        <input required type="password" placeholder="Create Password" className="w-full p-3 mb-6 border rounded-xl" />
        
        <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700">
          Register & Continue
        </button>
      </form>
    </div>
  );
}