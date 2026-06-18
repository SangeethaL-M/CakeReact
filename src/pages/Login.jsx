import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff9f9]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Sweet Delights</h1>
        <p className="text-gray-500 mb-8">Welcome back! Please login.</p>
        
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-xl" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-6 border rounded-xl" />
        
        <button onClick={() => navigate('/home')} className="w-full bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700">Login</button>
        
        <p className="mt-4 text-sm text-gray-600">
          New here? <button onClick={() => navigate('/register')} className="text-pink-600 font-bold">Register now</button>
        </p>
      </div>
    </div>
  );
}