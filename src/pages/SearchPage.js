// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchFilters from '../components/search/SearchFilters';
import ProductGrid from '../components/search/ProductGrid';
import { products } from '../data/products';
import '../styles/Search.css';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    // Get category from URL if present
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Filter products based on search term, category, and price range
    let filtered = products;
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(filtered);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    setSearchParams(params);
  }, [searchTerm, selectedCategory, priceRange]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the effect
  };
  
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  
  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
  };
  
  return (
    <div className="search-page">
      <div className="search-header">
        <div className="container">
          <h1 className="search-title">Browse Products</h1>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for crochet items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
      
      <div className="container">
        <div className="search-content">
          <SearchFilters
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceRangeChange={handlePriceRangeChange}
          />
          
          <ProductGrid
            products={filteredProducts}
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;