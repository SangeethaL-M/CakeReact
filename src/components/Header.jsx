import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', alignItems: 'center', background: '#fff9f9' }}>
      <h1 style={{ color: '#ec4899', margin: 0 }}>Sweet Delights</h1>
      
      {/* Hamburger Icon for Mobile */}
      <div style={{ display: 'none', cursor: 'pointer' }} 
           className="hamburger" 
           onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Menu Links */}
      <div style={{ display: 'flex', gap: '20px' }} className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/cakes">Cake</Link>
        <Link to="/pastries">Pastries</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>

      {/* Basic Responsive CSS Injection */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger { display: block !important; }
          .nav-links { 
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute; top: 70px; right: 20px;
            background: white; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;