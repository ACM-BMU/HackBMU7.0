import { Navigate, useLocation } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import ClueHunt from "./ClueHunt/ClueHunt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if this is the first load of the site by checking localStorage
    const hasVisitedSite = localStorage.getItem('hasVisitedSite');
    
    if (!hasVisitedSite) {
      // First visit, show loader
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        // Mark that we've visited the site in this session
        localStorage.setItem('hasVisitedSite', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
    // If returning from another page in the app, don't show loader
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

/*hi*/
    