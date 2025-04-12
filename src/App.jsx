import { Navigate, useLocation } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import ClueHunt from "./ClueHunt/ClueHunt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [hasVisitedSite, setHasVisitedSite] = useState(false);

  useEffect(() => {
    // Check if site has been visited in this session
    const visited = sessionStorage.getItem('hasVisitedSite');
    
    if (!visited) {
      // First visit to the site
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setHasVisitedSite(true);
        // Mark that we've visited the site in this session
        sessionStorage.setItem('hasVisitedSite', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      // Already visited, don't show loader
      setLoading(false);
      setHasVisitedSite(true);
    }
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<ClueHunt />} path="/clue-hunt" />
        </Routes>
      )}
    </Router>
  );
}

export default App;
