import React, { useState, useEffect } from 'react';

const HighTechRetroContact = () => {
  const [stars, setStars] = useState([]);

  // Generate static stars
  useEffect(() => {
    const generatedStars = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setStars(generatedStars);
  }, []);

  const contactData = [
    {
      id: 1,
      name: "GAURAV GHOSH",
      email: "gaurav.ghosh.23cse@bmu.edu.in",
      phone: "+91 79080 41180"
    },
    {
      id: 2,
      name: "SEJAL GUPTA",
      email: "sejal.gupta.23cse@bmu.edu.in",
      phone: "+91 89018 27731"
    }
  ];

  const styles = `
    .space-container {
      position: relative;
      min-height: 80vh;
      overflow: hidden;
      background: #0a1e36;
    }

    .star-field {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .star {
      position: absolute;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .contact-content {
      position: relative;
      z-index: 2;
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(30, 143, 180, 0.2);
    }

    .header h2 {
      font-size: 2.5rem;
      letter-spacing: 5px;
      margin: 0;
      color: #e0e0e0;
      font-family: 'Courier New', monospace;
    }

    .header h3 {
      font-size: 1rem;
      color: #1e8fb4;
      margin-top: 0.75rem;
      letter-spacing: 2px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .contact-card {
      background: rgba(10, 14, 25, 0.85);
      padding: 2rem;
      border: 1px solid rgba(30, 143, 180, 0.3);
      border-radius: 6px;
      backdrop-filter: blur(8px);
    }

    .name {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
      color: #00aaff;
      letter-spacing: 1.5px;
    }

    .contact-detail {
      margin: 0.9rem 0;
      display: flex;
      align-items: center;
    }

    .label {
      color: #1e8fb4;
      width: 80px;
      font-size: 0.9rem;
    }

    .value {
      color: #d0d0d0;
    }

    .value a {
      color: #00aaff;
      text-decoration: none;
    }

    @media (min-width: 768px) {
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
      }
        @media (max-width: 768px) {
      .contact-content {
        padding: 2rem 1.5rem;
      }

      .header h2 {
        font-size: 2rem;
        letter-spacing: 3px;
      }

      .header h3 {
        font-size: 0.9rem;
      }

      .contact-grid {
        gap: 1.5rem;
      }

      .contact-card {
        padding: 1.5rem;
      }

      .name {
        font-size: 1.3rem;
      }

      .label {
        width: 70px;
        font-size: 0.85rem;
      }

      .value {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      .contact-content {
        padding: 1.5rem 1rem;
      }

      .header h2 {
        font-size: 1.7rem;
        letter-spacing: 2px;
      }

      .header h3 {
        font-size: 0.8rem;
        margin-top: 0.5rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 1.2rem;
      }

      .contact-card {
        padding: 1.2rem;
      }

      .name {
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
      }

      .contact-detail {
        margin: 0.7rem 0;
        flex-wrap: wrap;
      }

      .label {
        width: 100%;
        margin-bottom: 0.3rem;
      }

      .value a {
        word-break: break-all;
      }
    }

    @media (max-width: 320px) {
      .header h2 {
        font-size: 1.5rem;
      }

      .name {
        font-size: 1.1rem;
      }

      .contact-card {
        padding: 1rem;
      }

      .value {
        font-size: 0.85rem;
      }
    }

    /* Touch optimization */
    @media (hover: none) {
      .value a {
        padding: 4px 8px;
        display: inline-block;
      }
    }
  `;

  return (
    <div className="space-container">
      <style>{styles}</style>
      
      {/* Star Background */}
      <div className="star-field">
        {stars.map(star => (
          <div 
            key={star.id}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity
            }}
          />
        ))}
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="header">
          <h2>CONTACT_HackBMU.EXE</h2>
          <h3>// SECURE LINE ESTABLISHED //</h3>
        </div>
        
        <div className="contact-grid">
          {contactData.map(person => (
            <div key={person.id} className="contact-card">
              <div className="name">{person.name}</div>
              <div className="contact-detail">
                <span className="label">EMAIL:</span>
                <span className="value">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </span>
              </div>
              <div className="contact-detail">
                <span className="label">SECURE:</span>
                <span className="value">
                  <a href={`tel:${person.phone}`}>{person.phone}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighTechRetroContact;