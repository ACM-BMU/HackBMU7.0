import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set your event date here
  const eventDate = new Date('2025-07-01T00:00:00');
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Generate static stars for the background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = 0.2 + Math.random() * 0.6;
      
      stars.push(
        <div 
          key={i}
          className="static-star" 
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            opacity: opacity,
            backgroundColor: '#fff',
            position: 'absolute',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.3)'
          }}
        />
      );
    }
    return stars;
  };
  
  // Generate static particles for the background
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const size = 2 + Math.random() * 4;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = 0.2 + Math.random() * 0.5;
      
      particles.push(
        <div 
          key={i}
          className="static-particle" 
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            opacity: opacity,
            backgroundColor: 'rgba(0, 238, 255, 0.3)',
            position: 'absolute',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(0, 238, 255, 0.2)'
          }}
        />
      );
    }
    return particles;
  };
  
  return (
    <section className="hero-section">
      <div className="hero-star-background">
        {generateStars()}
      </div>
      <div className="hero-particles">
        {generateParticles()}
      </div>
      
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            HACK<span className="hero-title-accent">BMU</span> 7.0
          </h1>
          <h2 className="hero-subtitle">
            DISRUPT THE NORM
          </h2>
          <p className="hero-description">
            HackBMU 7.0 is a 24-hour hackathon celebrating innovation, collaboration, and creative problem-solving. 
            It unites tech enthusiasts to tackle real-world challenges, enhance their skills, and connect with industry leaders. 
            Whether you're a developer, designer, or entrepreneur, it's your chance to shine and turn bold ideas into reality.
          </p>
          <button className="hero-register-button">
            <span className="button-text">REGISTER NOW</span>
          </button>
        </div>
        
        <div className="hero-right">
          <div className="timeline-container">
            <div className="timeline-header">
              <h3 className="timeline-title">COUNTDOWN</h3>
              <div className="timeline-line" style={{ marginTop: '-0.4rem', marginLeft: 'auto', marginRight: 'auto', transform: 'translateX(20px)' }}></div>
            </div>
            
            <div className="timeline-counters">
              <div className="timeline-counter">
                <div className="counter-value">{timeLeft.days}</div>
                <div className="counter-label">DAYS</div>
              </div>
              <div className="timeline-counter">
                <div className="counter-value">{timeLeft.hours}</div>
                <div className="counter-label">HOURS</div>
              </div>
              <div className="timeline-counter">
                <div className="counter-value">{timeLeft.minutes}</div>
                <div className="counter-label">MINUTES</div>
              </div>
              <div className="timeline-counter">
                <div className="counter-value">{timeLeft.seconds}</div>
                <div className="counter-label">SECONDS</div>
              </div>
            </div>
            
            <div className="timeline-track">
              <div className="timeline-progress">
                <div className="timeline-indicator-static"></div>
              </div>
            </div>
            
            <div className="timeline-events">
              <div className="timeline-event">
                <div className="event-dot"></div>
                <div className="event-label">REGISTRATION</div>
              </div>
              <div className="timeline-event">
                <div className="event-dot"></div>
                <div className="event-label">HACKING</div>
              </div>
              <div className="timeline-event">
                <div className="event-dot"></div>
                <div className="event-label"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;