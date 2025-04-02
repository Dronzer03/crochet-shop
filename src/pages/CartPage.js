// src/pages/CartPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const CartPage = () => {
  // Sample cart data - in a real application, this would come from context/redux/localStorage
  const [cartItems, setCartItems] = useState([
  ]);
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;
  
  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="container">
          <h1 className="cart-title">Your Shopping Cart</h1>
        </div>
      </div>
      
      <div className="container">
        <div className={`cart-content ${isVisible ? 'fade-in' : ''}`}>
          {cartItems.length > 0 ? (
            <div className="cart-grid">
              <div className="cart-items">
                <div className="cart-items-header">
                  <div className="cart-item-product">Product</div>
                  <div className="cart-item-price">Price</div>
                  <div className="cart-item-quantity">Quantity</div>
                  <div className="cart-item-total">Total</div>
                  <div className="cart-item-actions"></div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-product">
                      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p>Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                      </div>
                    </div>
                    
                    <div className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="cart-item-quantity">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    <div className="cart-item-actions">
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <h2>Order Summary</h2>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="free-shipping-notice">
                    <p>Add ${(50 - subtotal).toFixed(2)} more to get free shipping!</p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${(subtotal / 50) * 100}%` }}></div>
                    </div>
                  </div>
                )}
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <button className="btn btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
                
                <Link to="/search" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <Link to="/search" className="btn btn-primary">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;