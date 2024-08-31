import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header3';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, clearCart } = useCart(); // Obtén la función clearCart
  const { darkMode, toggleTheme } = useTheme(); 

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div className={`main-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <button onClick={toggleTheme} className="theme-toggle-button">
        {darkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
      </button>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index}>
                <span className="item-name">{item.name}</span>  
                <span className="item-price">{item.price}</span> 
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> ${calculateTotal()}
          </div>
          <button onClick={clearCart} className="clear-cart-button">
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;


