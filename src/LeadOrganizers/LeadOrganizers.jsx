import React, { useEffect } from 'react';
import './LeadOrganizers.css';

// Import photos (make sure these files exist in your project)
import gauravPhoto from '/img/gaurav.webp'; // Update with actual path
import sejalPhoto from '/img/sejal.webp';   // Update with actual path
import tanmayPhoto from '/img/tanmay.webp'; // Update with actual path

const LeadOrganizers = () => {
  useEffect(() => {
    // Create random stars for background effect
    const createStars = () => {
      const starContainer = document.querySelector('.star-background');
      if (starContainer) {
        starContainer.innerHTML = '';
        const numStars = 100;
        
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 5}s`;
          star.style.width = `${Math.random() * 2 + 1}px`;
          star.style.height = star.style.width;
          starContainer.appendChild(star);
        }
      }
    };
    
    createStars();
  }, []);
  
  // Particles for the background effect
  const particles = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 5 + 1;
    return {
      id: i,
      size,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 10
    };
  });

  const leads = [
    {
      name: "Gaurav Ghosh",
      title: "Lead Organizer",
      photo: gauravPhoto,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/gaurav-ghosh-9531132b3/",
        github: "https://github.com/Gaurav-py-Ghosh"
      }
    },
    {
      name: "Sejal Gupta",
      title: "Lead Organizer",
      photo: sejalPhoto,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sejal-gupta-943832291/",
        github: "https://github.com/Sejal207",
        instagram: "https://www.instagram.com/_sejal05_/"
      }
    },
    {
      name: "Tanmay Gupta",
      title: "Lead Organizer",
      photo: tanmayPhoto,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/tanmay-gupta-b337012b5/",
        github: "https://github.com/TanmayGpta"
      }
    }
  ];

  return (
    <div className="lead-organizers-section" id='organisers'>
      {/* Star background */}
      <div className="star-background"></div>
      
      {/* Floating particles */}
      <div className="lead-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="lead-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      <h2 className="lead-section-title">LEAD ORGANIZERS</h2>
      <p className="lead-section-subtitle">Commanding the cosmic hackathon</p>
      
      <div className="lead-organizers-grid">
        {leads.map((lead, index) => (
          <div className="lead-card" key={index}>
            <div className="card-orbit">
              <div className="orbit-particle"></div>
            </div>
            
            <div className="lead-photo-container">
              <div className="lead-photo-placeholder">
                <img src={lead.photo} alt={lead.name} className="lead-photo" />
              </div>
              <div className="lead-glow"></div>
            </div>
            
            <h3 className="lead-name">{lead.name}</h3>
            <p className="lead-title">{lead.title}</p>
            
            <div className="lead-social">
              {/* LinkedIn */}
              <a href={lead.socialLinks.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#00eeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="#00eeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#00eeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* GitHub */}
              <a href={lead.socialLinks.github} className="social-icon" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="#00eeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Instagram (only for Sejal) */}
              {lead.socialLinks.instagram && (
                <a href={lead.socialLinks.instagram} className="social-icon" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#00eeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#00eeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16.5" cy="7.5" r="1.5" fill="#00eeff"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadOrganizers;