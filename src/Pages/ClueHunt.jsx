import React, { useState, useEffect } from "react";
import ClueHuntNav from "../ClueHunt/ClueHuntNav.jsx";
import CosmicBackground from "../ClueHunt/CosmicBackground.jsx";
import TeamLogin from "../ClueHunt/TeamLogin.jsx";
import ClueCard from "../ClueHunt/ClueCard.jsx";
import HuntCompletion from "../ClueHunt/HuntCompletion.jsx";
import "./ClueHunt.css";

// Import clue data
import { teamClueSequences, getTeamClues, isValidTeam, checkAnswer } from "../ClueHunt/ClueData.js";

function ClueHunt() {
  const [teamId, setTeamId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [clues, setClues] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedHunt, setCompletedHunt] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

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
    
    // Show initial pulse animation only once when the page loads
    if (initialLoad) {
      setShowPulse(true);
      setTimeout(() => {
        setShowPulse(false);
        setInitialLoad(false);
      }, 1500);
    }
  }, [initialLoad]);

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

  const handleTeamLogin = (teamId) => {
    if (!teamId || !isValidTeam(teamId)) {
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
    if (checkAnswer(teamId, currentClueIndex, answer)) {
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

  return (
    <div className="clue-hunt-wrapper">
      <ClueHuntNav />
      
      {/* Background elements */}
      <CosmicBackground showPulse={showPulse} />
      
      <div className="clue-hunt-content">
        <div className={`clue-hunt-container ${showPulse ? 'pulse-active' : ''}`}>
          <div className="container-glow"></div>
          <h1>
            <span className="glitch-text" data-text="Treasure Hunt Challenge">Treasure Hunt Challenge</span>
          </h1>

          {!isLoggedIn ? (
            <TeamLogin 
              teamId={teamId} 
              setTeamId={setTeamId} 
              handleLogin={handleTeamLogin} 
              message={message} 
            />
          ) : completedHunt ? (
            <HuntCompletion resetProgress={resetProgress} />
          ) : (
            <ClueCard 
              currentClueIndex={currentClueIndex}
              clue={clues[currentClueIndex]}
              answer={answer}
              setAnswer={setAnswer}
              handleSubmitAnswer={handleSubmitAnswer}
              isCorrect={isCorrect}
              message={message}
              teamId={teamId}
              cluesLength={clues.length}
              resetProgress={resetProgress}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ClueHunt; 