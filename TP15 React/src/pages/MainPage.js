import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import './MainPage.css';

const MainPage = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`main-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <button onClick={toggleTheme} className="theme-toggle-button">
        {darkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
      </button>
      <ProductList />
    </div>
  );
};

export default MainPage;
