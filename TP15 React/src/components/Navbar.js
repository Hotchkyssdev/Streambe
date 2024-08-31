import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Inicio</Link>
      <Link to="/products" className="navbar-link">Productos</Link>
      <Link to="/cart" className="navbar-link">Mi Carrito</Link>
    </nav>
  );
};

export default Navbar;

