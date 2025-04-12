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

// Helper functions related to clue data
const getTeamClues = (teamId) => {
  return teamClueSequences[teamId] || [];
};

const isValidTeam = (teamId) => {
  return !!teamClueSequences[teamId];
};

const checkAnswer = (teamId, clueIndex, answer) => {
  const clues = getTeamClues(teamId);
  if (clueIndex >= clues.length) return false;
  
  return answer.toLowerCase().trim() === clues[clueIndex].answer.toLowerCase();
};

export { teamClueSequences, getTeamClues, isValidTeam, checkAnswer }; 