// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crochet-shop" element={<HomePage />} />
            <Route path="/crochet-shop/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;