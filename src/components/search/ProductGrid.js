// src/components/search/ProductGrid.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../common/ProductCard';
import '../../styles/Search.css';

const ProductGrid = ({ products, searchTerm, selectedCategory }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  
  useEffect(() => {
    setVisibleProducts([]);
    
    // Animate products appearing one by one
    const timer = setInterval(() => {
      setVisibleProducts(prev => {
        if (prev.length < products.length) {
          return [...prev, products[prev.length]];
        }
        clearInterval(timer);
        return prev;
      });
    }, 100);
    
    return () => clearInterval(timer);
  }, [products]);
  
  if (products.length === 0) {
    return (
      <div className="no-results">
        <h3>No products found</h3>
        <p>
          {searchTerm 
            ? `No products match "${searchTerm}"${selectedCategory !== 'all' ? ' in this category' : ''}.` 
            : 'No products available in this category.'}
        </p>
        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Clear Filters
        </button>
      </div>
    );
  }
  
  return (
    <div className="products-grid">
      {visibleProducts.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          isAnimated={true}
        />
      ))}
    </div>
  );
};

export default ProductGrid;