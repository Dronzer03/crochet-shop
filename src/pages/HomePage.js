// src/pages/HomePage.js
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrendingProducts from '../components/home/TrendingProducts';
// import FeaturedCategories from '../components/home/FeaturedCategories';
import '../styles/Home.css';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="home-page">
      <HeroSection />
      <TrendingProducts />
      {/* <FeaturedCategories /> */}
      
      <section style={{ 
        padding: '4rem 0', 
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        textAlign: 'center' 
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '1.5rem',
            color: '#333' 
          }}>
            Handcrafted with Love
          </h2>
          <p style={{ 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            color: '#555',
            lineHeight: '1.6'
          }}>
            Every item is carefully made with premium materials and attention to detail.
            Support artisanal craftsmanship and bring unique pieces into your home.
          </p>
          <button className="btn btn-primary pulse">
            Explore Our Story
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;