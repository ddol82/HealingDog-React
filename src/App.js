import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidbar from "./components/Sidbar";
import Beautyboard from "./pages/Beautyboard";
import Boardingboard from "./pages/Boardingboard";
import Careboard from "./pages/Careboard";
import Kindergarden from "./pages/Kindergarden";
import Trainingboard from "./pages/Trainingboard";
import Walkingboard from "./pages/Walkingboard";

function App() {
  return (
    <BrowserRouter>
      <Sidbar>
        <Routes>
          <Route path="/" element={<Careboard />} />
          <Route path="/careboard" element={<Careboard />} />
          <Route path="/walkingboard" element={<Walkingboard />} />
          <Route path="/trainingboard" element={<Trainingboard />} />
          <Route path="/beautyboard" element={<Beautyboard />} />
          <Route path="/boardingboard" element={<Boardingboard />} />
          <Route path="/kindergarden" element={<Kindergarden />} />
        </Routes>
      </Sidbar>
    </BrowserRouter>
  );
}

export default App;
