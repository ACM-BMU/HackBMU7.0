import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar1.css';  // Use the main navbar styles

const ClueHuntNav = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navStarCount = 40;
  
  return (
    <div className="cosmic-nav-wrapper">
      <div className="nebula-effect"></div>

      <nav className={`cosmic-nav ${scrolled ? 'scrolled' : ''}`}>
        {/* Navbar stars */}
        <div className="navbar-static-stars">
          {[...Array(navStarCount)].map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.7 + 0.3;
            
            return (
              <div 
                key={`nav-star-${i}`} 
                className="navbar-static-star" 
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity
                }}
              />
            );
          })}
        </div>

        <div className="cosmic-nav-container" style={{ maxWidth: '250px' }}>
          <div className="cosmic-glow-effect"></div>
          
          {/* Logo - with direct link to home */}
          <Link to="/" className="cosmic-logo-container">
            <div className="cosmic-logo">
              <div className="logo-planet"></div>
            </div>
            <div className="logo-image-wrapper">
              <img 
                src="/img/hack.png" 
                alt="HackBMU Logo" 
                className="cosmic-logo-image enlarged" 
              />
            </div>
          </Link>

          {/* Single Home button */}
          <div className="cosmic-nav-desktop" style={{ display: 'flex' }}>
            <Link to="/" className="cosmic-nav-item" style={{ textDecoration: 'none' }}>
              <span className="nav-text">Home</span>
              <span className="nav-hover-effect"></span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ClueHuntNav; 