// src/components/common/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
            backgroundColor: isScrolled ? 'white' : 'transparent',
            boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" className="logo" style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#ff6b6b'
                }}>
                    Story of Hooks
                </Link>

                <div className="mobile-menu-button"
                    style={{
                        display: 'none',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        '@media (maxWidth: 768px)': {
                            display: 'block'
                        }
                    }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? '✕' : '☰'}
                </div>

                <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: '2rem',
                    '@media (maxWidth: 768px)': {
                        display: isMobileMenuOpen ? 'flex' : 'none',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'white',
                        padding: '1rem',
                        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'
                    }
                }}>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/" style={{
                            fontWeight: location.pathname === '/' ? '600' : '400',
                            position: 'relative',
                            '&::after': location.pathname === '/' ? {
                                content: '""',
                                position: 'absolute',
                                bottom: '-5px',
                                left: '0',
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#ff6b6b'
                            } : {}
                        }}>Home</Link>
                    </li>
                    <li className={location.pathname === '/search' ? 'active' : ''}>
                        <Link to="/search" style={{
                            fontWeight: location.pathname === '/search' ? '600' : '400',
                            position: 'relative',
                            '&::after': location.pathname === '/search' ? {
                                content: '""',
                                position: 'absolute',
                                bottom: '-5px',
                                left: '0',
                                width: '100%',
                                height: '2px',
                                backgroundColor: '#ff6b6b'
                            } : {}
                        }}>Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="nav-actions" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    '@media (maxWidth: 768px)': {
                        display: 'none'
                    }
                }}>
                    <button className="btn btn-outline">Login</button>
                    <Link to="/cart">
                    <div className="cart-icon" style={{
                        position: 'relative',
                        cursor: 'pointer',
                        fontSize: '1.5rem'
                    }}>
                        🛒
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            background: '#ff6b6b',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            0
                        </span>
                    </div>
                    </Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;