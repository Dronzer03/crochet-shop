// src/components/search/SearchFilters.js
import React from 'react';
import { categories } from '../../data/products';
import '../../styles/Search.css';

const SearchFilters = ({ selectedCategory, onCategoryChange, priceRange, onPriceRangeChange }) => {
  return (
    <div className="filters-sidebar filter-appear">
      <div className="filter-section">
        <h3 className="filter-title">Categories</h3>
        <ul className="filter-list">
          {categories.map(category => (
            <li key={category.id} className="filter-item">
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={() => onCategoryChange(category.id)}
                  className="filter-checkbox"
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      {/* <div className="filter-section">
        <h3 className="filter-title">Price Range</h3>
        <div style={{ padding: '0 10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
              style={{ width: '100%' }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div> */}
      
      <div className="filter-section">
        <h3 className="filter-title">Availability</h3>
        <ul className="filter-list">
          <li className="filter-item">
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" className="filter-checkbox" />
              In Stock
            </label>
          </li>
          <li className="filter-item">
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" className="filter-checkbox" />
              Featured
            </label>
          </li>
          <li className="filter-item">
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" className="filter-checkbox" />
              Trending
            </label>
          </li>
        </ul>
      </div>
      
      <button className="btn btn-primary" style={{ width: '100%' }}>
        Reset Filters
      </button>
    </div>
  );
};

export default SearchFilters;