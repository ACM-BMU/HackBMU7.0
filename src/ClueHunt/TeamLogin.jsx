import React from "react";
import { isValidTeam } from "./ClueData";

const TeamLogin = ({ teamId, setTeamId, handleLogin, message }) => {
  const handleSubmit = () => {
    if (!teamId || !isValidTeam(teamId)) {
      return;
    }
    handleLogin(teamId);
  };

  return (
    <div className="team-login">
      <div className="login-scanner-line"></div>
      <h2>Enter Your Team ID</h2>
      <div className="input-group">
        <input
          type="text"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          placeholder="Team ID (e.g., team1, team2)"
        />
        <button onClick={handleSubmit}><span>Start Hunt</span></button>
      </div>
      {message && <p className="message error">{message}</p>}
    </div>
  );
};

export default TeamLogin; 