// src/components/common/ProductCard.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'; // We'll need to create this context

const ProductCard = ({ product, isAnimated = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Add the product to cart
    addToCart(product);
    
    // Reset button state after animation
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  return (
    <div 
      className={`product-card ${isAnimated ? 'product-appear' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        position: 'relative'
      }}
    >
      {product.trending && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          padding: '0.3rem 0.8rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          zIndex: '1'
        }}>
          Trending
        </div>
      )}
      
      <div style={{
        height: '200px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img 
          src={product.imageUrl} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
      </div>
      
      <div style={{ padding: '1rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#333'
          }}>
            {product.name}
          </h3>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.8rem',
            color: 'gold'
          }}>
            {'★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '★' : '')}
          </div>
        </div>
        
        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '1rem',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.description}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#ff6b6b'
          }}>
            ₹{product.price}
          </span>
          
          <span style={{
            fontSize: '0.8rem',
            color: product.stock > 10 ? 'green' : 'orange'
          }}>
            {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
          </span>
        </div>
        
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          style={{
            width: '100%',
            backgroundColor: isAdding ? '#4CAF50' : '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.75rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: isAdding ? 'default' : 'pointer',
            transition: 'background-color 0.3s ease',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => !isAdding && (e.target.style.backgroundColor = '#ff5252')}
          onMouseOut={(e) => !isAdding && (e.target.style.backgroundColor = '#ff6b6b')}
        >
          {isAdding ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;