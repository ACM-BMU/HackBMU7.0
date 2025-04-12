import Homepage from "./Pages/HomePage";
import ClueHunt from "./Pages/ClueHunt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
