import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import Pastries from './pages/Pastries';
import About from './pages/About';
import Cart from './pages/Cart';


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/pastries" element={<Pastries />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App;