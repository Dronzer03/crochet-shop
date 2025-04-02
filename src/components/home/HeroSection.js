// src/components/home/HeroSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="hero-section">
      <div className="container" style={{ position: 'relative', height: '100%' }}>
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
          <h1>Handcrafted Crochet<br />With Love</h1>
          <p>Discover unique, handmade crochet items that bring warmth and charm to your everyday life. Each piece tells a story of creativity and craftsmanship.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/search" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        
        <div className={`hero-image ${isVisible ? 'fade-in' : ''}`} style={{ opacity: isVisible ? 1 : 0, transitionDelay: '0.3s' }}></div>
        
        <div className="hero-shape"></div>
        <div className="hero-shape" style={{ top: '-100px', right: '-100px', left: 'auto' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;