// src/components/common/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '3rem 0 1rem',
      marginTop: '2rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div className="footer-section">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Story of Hooks</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>
              Handmade with love and care. Each piece is uniquely crafted to bring joy and comfort to your home.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 style={{ marginBottom: '1rem' }}>Categories</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li><Link to="/search?category=toys">Toys & Amigurumi</Link></li>
              <li><Link to="/search?category=home">Home Decor</Link></li>
              <li><Link to="/search?category=apparel">Apparel</Link></li>
              <li><Link to="/search?category=baby">Baby Items</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 style={{ marginBottom: '1rem' }}>Stay Connected</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <div className="social-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6b6b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                f
              </div>
              <div className="social-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6b6b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                in
              </div>
              <div className="social-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6b6b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                ig
              </div>
            </div>
            <p style={{ color: '#bbb' }}>Sign up for our newsletter</p>
            <div style={{ display: 'flex', marginTop: '0.5rem' }}>
              <input type="email" placeholder="Your email"
                style={{
                  padding: '0.5rem',
                  border: 'none',
                  borderRadius: '4px 0 0 4px',
                  flex: '1'
                }}
              />
              <button style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #444',
          paddingTop: '1rem',
          textAlign: 'center',
          color: '#bbb',
          fontSize: '0.9rem'
        }}>
          <p>&copy; 2025 CrochetCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;