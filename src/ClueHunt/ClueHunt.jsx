import React, { useState, useEffect } from "react";
import ClueHuntNav from "./ClueHuntNav.jsx";
import Footer from "../footer/footer.jsx";
import "./ClueHunt.css";

// Sample clue data structure (in a real app, this would come from a backend)
const teamClueSequences = {
  "team1": [
    { id: "t1c1", question: "What has keys but no locks, space but no room, and you can enter but not exit?", answer: "keyboard" },
    { id: "t1c2", question: "I'm light as a feather, but the strongest person can't hold me for more than a few minutes. What am I?", answer: "breath" },
    { id: "t1c3", question: "Final: Where do all paths lead?", answer: "rome" }
  ],
  "team2": [
    { id: "t2c1", question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo" },
    { id: "t2c2", question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { id: "t2c3", question: "Final: Where do all paths lead?", answer: "rome" }
  ],
  "team3": [
    { id: "t3c1", question: "What gets wetter as it dries?", answer: "towel" },
    { id: "t3c2", question: "What can travel around the world without leaving its corner?", answer: "stamp" },
    { id: "t3c3", question: "Final: Where do all paths lead?", answer: "rome" }
  ]
};

function ClueHunt() {
  const [teamId, setTeamId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [clues, setClues] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedHunt, setCompletedHunt] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Load team progress from localStorage if available
  useEffect(() => {
    const savedTeamId = localStorage.getItem("clueHuntTeamId");
    const savedProgress = localStorage.getItem("clueHuntProgress");

    if (savedTeamId && savedProgress) {
      setTeamId(savedTeamId);
      setIsLoggedIn(true);
      setCurrentClueIndex(parseInt(savedProgress));
      setClues(teamClueSequences[savedTeamId] || []);

      if (parseInt(savedProgress) >= (teamClueSequences[savedTeamId]?.length || 0)) {
        setCompletedHunt(true);
      }
    }
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("clueHuntTeamId", teamId);
      localStorage.setItem("clueHuntProgress", currentClueIndex.toString());

      if (currentClueIndex >= clues.length) {
        setCompletedHunt(true);
      }
    }
  }, [isLoggedIn, teamId, currentClueIndex, clues]);

  const handleTeamLogin = () => {
    if (!teamId || !teamClueSequences[teamId]) {
      setMessage("Invalid team ID. Please try again.");
      return;
    }

    setIsLoggedIn(true);
    setClues(teamClueSequences[teamId]);
    setMessage("");
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    if (!answer.trim()) {
      setMessage("Please enter an answer.");
      return;
    }

    const currentClue = clues[currentClueIndex];
    if (answer.toLowerCase().trim() === currentClue.answer.toLowerCase()) {
      setIsCorrect(true);
      setMessage("Correct! Moving to next clue...");

      setTimeout(() => {
        setCurrentClueIndex(prevIndex => prevIndex + 1);
        setAnswer("");
        setMessage("");
        setIsCorrect(false);
      }, 2000);
    } else {
      setMessage("Incorrect answer. Try again!");
      setAnswer("");
    }
  };

  const resetProgress = () => {
    localStorage.removeItem("clueHuntTeamId");
    localStorage.removeItem("clueHuntProgress");
    setIsLoggedIn(false);
    setTeamId("");
    setCurrentClueIndex(0);
    setAnswer("");
    setMessage("");
    setClues([]);
    setCompletedHunt(false);
  };
  
  // Generate cosmic stars for the background
  const generateCosmicStars = () => {
    // Scale stars based on screen width
    const starCount = windowWidth > 1600 ? 150 : windowWidth > 1200 ? 120 : 80;
    
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 3 + 0.5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = 0.2 + Math.random() * 0.6;
      const animationDuration = 3 + Math.random() * 7;
      
      stars.push(
        <div 
          key={i}
          className="cosmic-star" 
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            opacity: opacity,
            animation: Math.random() > 0.7 ? `twinkle ${animationDuration}s infinite alternate` : 'none'
          }}
        />
      );
    }
    return stars;
  };
  
  // Generate celebration particles for completed hunt
  const generateCompletedParticles = () => {
    const particleCount = 20;
    
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const size = 2 + Math.random() * 5;
      const left = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 3 + Math.random() * 3;
      
      particles.push(
        <div 
          key={i}
          className="completed-particle" 
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            bottom: `-10px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <div className="clue-hunt-wrapper">
      <ClueHuntNav />
      <div className="cosmic-stars">
        {generateCosmicStars()}
      </div>
      
      <div className="clue-hunt-content">
        <div className="clue-hunt-container">
          <h1>Treasure Hunt Challenge</h1>

          {!isLoggedIn ? (
            <div className="team-login">
              <h2>Enter Your Team ID</h2>
              <div className="input-group">
                <input
                  type="text"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  placeholder="Team ID (e.g., team1, team2)"
                />
                <button onClick={handleTeamLogin}><span>Start Hunt</span></button>
              </div>
              {message && <p className="message error">{message}</p>}
            </div>
          ) : completedHunt ? (
            <div className="completed-hunt">
              <div className="completed-particles">
                {generateCompletedParticles()}
              </div>
              <div className="trophy-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h2>Congratulations!</h2>
              <p>You've completed all the clues in the treasure hunt!</p>
              <p>You've reached the final destination. All paths lead to Rome!</p>
              <button onClick={resetProgress}><span>Start Over</span></button>
            </div>
          ) : (
            <div className="clue-container">
              <h2>Clue #{currentClueIndex + 1}</h2>
              <div className="clue-card">
                <p>{clues[currentClueIndex].question}</p>
                <form onSubmit={handleSubmitAnswer}>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Your answer"
                    className={isCorrect ? "correct" : ""}
                  />
                  <button type="submit"><span>Submit</span></button>
                </form>
                {message && (
                  <p className={`message ${isCorrect ? "success" : "error"}`}>
                    {message}
                  </p>
                )}
              </div>
              <p className="team-info">Team: {teamId} | Progress: {currentClueIndex + 1}/{clues.length}</p>
              <button className="reset-btn" onClick={resetProgress}><span>Reset Progress</span></button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ClueHunt; 