import { Navigate } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      
   
        <Routes>
          <Route element={<Homepage />} path="/" />
          

        </Routes>
    
    </Router>
  );
}

export default App;

/*hi*/