// src/components/home/TrendingProducts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { products } from '../../data/products';

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const trendingProducts = products.filter(product => product.trending);
  
  useEffect(() => {
    // Animate products appearing one by one
    const timer = setInterval(() => {
      setVisibleProducts(prev => {
        if (prev.length < trendingProducts.length) {
          return [...prev, trendingProducts[prev.length]];
        }
        clearInterval(timer);
        return prev;
      });
    }, 200);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="trending-section">
      <div className="container">
        <h2 className="section-title">Trending Products</h2>
        
        <div className="trending-products">
          {visibleProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isAnimated={true} 
            />
          ))}
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '2rem',
          animation: 'fadeIn 1s ease 1s forwards',
          opacity: visibleProducts.length === trendingProducts.length ? 1 : 0
        }}>
          <Link to="/search" className="btn btn-outline">View All Products</Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;