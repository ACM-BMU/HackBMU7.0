import React, { useState, useEffect } from 'react';
import './glimpses.css';
import { assets } from '../assets/assets';

const Glimpses = () => {
  const hackathonMemories = [
    {
      id: 3,
      image: assets.img2,
      color: "#10b981"
    },
    {
      id: 4,
      image: assets.img3,
      color: "#3b82f6"
    },
    {
      id: 5,
      image: assets.img4,
      color: "#8b5cf6"
    },
    {
      id: 6,
      image: assets.img5,
      color: "#f59e0b"
    },
    {
      id:7,
      image: assets.img6,
      color: "#ef4444"
    },
    {
      id: 8,
      image: assets.img7,
      color: "#10b981"
    },
    {
      id: 9,
      image: assets.img8,
      color: "#3b82f6"
    },
    {
      id: 10,
      image: assets.img9,
      color: "#8b5cf6"
    },
    {
      id: 11,
      image: assets.img10,
      color: "#f59e0b"
    },
    {
      id: 12,
      image: assets.img11,
      color: "#ef4444"
    },
    {
      id: 13,
      image: assets.img12,
      color: "#10b981"
    },
    {
      id: 14,
      image: assets.img13,
      color: "#3b82f6"
    },
    {
      id: 15,
      image: assets.img14,
      color: "#8b5cf6"
    },
    {
      id: 16,
      image: assets.img15,
      color: "#f59e0b"
    },
    {
      id: 17,
      image: assets.img16,
      color: "#ef4444"
    },
    {
      id: 18,
      image: assets.img17,
      color: "#10b981"
    },
    {
      id: 19,
      image: assets.img18, 
      color: "#3b82f6"
    },
    {
      id: 20,
      image: assets.img19,  
      color: "#8b5cf6"
    },
    {
      id: 21,
      image: assets.img20,
      color: "#f59e0b"
    },
    {
      id: 22,
      image: assets.img3,
      color: "#ef4444"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Auto-rotate through memories
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathonMemories.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? hackathonMemories.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 300);
    }
  };
  
  // Calculate indices for visible memories
  const getVisibleIndices = () => {
    const totalMemories = hackathonMemories.length;
    return [
      (currentIndex - 1 + totalMemories) % totalMemories,
      currentIndex,
      (currentIndex + 1) % totalMemories,
    ];
  };

  const visibleIndices = getVisibleIndices();

  // Random code snippets for hover effect
  const getRandomCode = (memoryId) => {
    const codeSnippets = [
      `/* Innovative Code */
class Hackathon${memoryId} {
  constructor() {
    this.theme = "AI Solutions";
    this.teamSize = ${Math.floor(Math.random() * 5) + 2};
    this.hoursLeft = ${Math.floor(Math.random() * 24)};
  }
  
  createMagic() {
    return \`\${this.theme}_solution_\${Date.now()}\`;
  }
}`,
      
      `/* DevOps Pipeline */
function deployHackathonProject${memoryId}() {
  const stages = [
    "build", "test", "deploy"
  ];
  
  return stages.map(stage => {
    console.log(\`Running \${stage}...\`);
    return Math.random() > 0.9 
      ? "failure" 
      : "success";
  });
}`,
      
      `/* UI Component */
const HackathonCard${memoryId} = () => {
  const [votes, setVotes] = useState(${Math.floor(Math.random() * 100)});
  
  useEffect(() => {
    // Simulate incoming votes
    const timer = setInterval(() => {
      setVotes(v => v + 1);
    }, 30000);
    
    return () => clearInterval(timer);
  }, []);
  
  return <div>Votes: {votes}</div>;
}`,
      
      `/* Database Schema */
const hackathonSchema${memoryId} = {
  project: {
    name: String,
    techStack: [String],
    contributors: [{ 
      name: String,
      github: String,
      role: String
    }],
    startedAt: Date,
    completedAt: Date,
    stars: Number
  }
}`,
      
      `/* Data Processing */
async function analyzeHackathonData${memoryId}() {
  const projects = await fetchData();
  
  return projects
    .filter(p => p.isCompleted)
    .map(p => ({
      name: p.name,
      score: p.votes * 0.6 + p.complexity * 0.4
    }))
    .sort((a, b) => b.score - a.score);
}`
    ];
    
    // Use the memory ID to pick a snippet, ensuring different memories get different snippets
    return codeSnippets[memoryId % codeSnippets.length];
  };

  return (
    <div className="gallery-container" id='gallery'>
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="terminal-circle red"></span>
          <span className="terminal-circle yellow"></span>
          <span className="terminal-circle green"></span>
        </div>
        <div className="terminal-title">hackbmu_memories.sh</div>
        <div className="terminal-info">bash - 80×24</div>
      </div>
      
      <div className="gallery-carousel">
        <div className="terminal-line">
          <span className="prompt">$</span> 
          <span className="command">ls -la ./hackbmu_memories/</span>
        </div>

        {/* Previous Memory Button */}
        <button 
          onClick={handlePrev}
          className="nav-button prev-button"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Memories */}
        <div className="memories-container">
          {hackathonMemories.map((memory, index) => {
            const isVisible = visibleIndices.includes(index);
            
            let positionClass = '';
            if (isVisible) {
              if (index === visibleIndices[0]) positionClass = 'left-memory';
              if (index === visibleIndices[1]) positionClass = 'center-memory';
              if (index === visibleIndices[2]) positionClass = 'right-memory';
            }
            
            return isVisible ? (
              <div 
                key={memory.id}
                className={`memory-card ${positionClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`memory-wrapper ${index === visibleIndices[1] ? 'active' : ''}`}>
                  <div className="memory-overlay"></div>
                  <img 
                    src={memory.image} 
                    alt={`Hackathon memory ${memory.id}`}
                    className="memory-image"
                  />
                  
                  <div 
                    className="memory-color-bar" 
                    style={{ backgroundColor: memory.color }}
                  ></div>
                  
                  {hoveredIndex === index && (
                    <div className="memory-code-overlay">
                      <pre>
                        <code>
                          {getRandomCode(memory.id)}
                        </code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ) : null;
          })}
        </div>

        {/* Next Memory Button */}
        <button 
          onClick={handleNext}
          className="nav-button next-button"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Terminal command line */}
      <div className="terminal-command-line">
        <span className="prompt">$</span> 
        <span className="command">cat ./memory_${currentIndex + 1}.json</span>
        <span className="cursor">█</span>
      </div>
      
      {/* Navigation dots */}
      <div className="nav-dots">
        {hackathonMemories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to memory ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Glimpses;