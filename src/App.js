import React from "react";
import "./styles/reset.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beautyboard from "./pages/Beautyboard";
import Boardingboard from "./pages/Boardingboard";
import Careboard from "./pages/Careboard";
import Kindergardenboard from "./pages/Kindergardenboard";
import Trainingboard from "./pages/Trainingboard";
import Walkingboard from "./pages/Walkingboard";
import LayoutProvider from "./layouts/LayoutProvider";
import LayoutUser from "./layouts/LayoutUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutProvider />}>
          <Route path="/care-board" element={<Careboard />} />
          <Route path="/walking-board" element={<Walkingboard />} />
          <Route path="/training-board" element={<Trainingboard />} />
          <Route path="/beauty-board" element={<Beautyboard />} />
          <Route path="/boarding-board" element={<Boardingboard />} />
          <Route path="/kindergarden-board" element={<Kindergardenboard />} />
        </Route>
        <Route path="/" element={<LayoutUser />}>
          {/* <Route path="/care" element={<Care />} />
          <Route path="/walking" element={<Walking />} />
          <Route path="/training" element={<Training />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/kindergarden" element={<Kindergarden />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
