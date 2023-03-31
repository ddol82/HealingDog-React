import React from "react";
import "./styles/reset.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beautyboard from "./pages/Beautyboard";
import BoardingManagement from "./pages/BoardingManagement";
import Careboard from "./pages/Careboard";
import Kindergardenboard from "./pages/Kindergardenboard";
import Trainingboard from "./pages/Trainingboard";
import Walkingboard from "./pages/Walkingboard";
import LayoutProvider from "./layouts/LayoutProvider";
import LayoutUser from "./layouts/LayoutUser";
import Review from "./components/review/Review";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutProvider />}>
          <Route path="/care-board" element={<Careboard />} />
          <Route path="/walking-board" element={<Walkingboard />} />
          <Route path="/training-board" element={<Trainingboard />} />
          <Route path="/beauty-board" element={<Beautyboard />} />
          <Route path="/boarding-management/" element={<BoardingManagement />} />
          <Route path="/kindergarden-board" element={<Kindergardenboard />} />
        </Route>
        <Route path="/" element={<LayoutUser />}>
          <Route path="reviews/:serviceCategoryCode" element={<Review />} />
          {/* <Route path="/care" element={<Care />} />
          <Route path="/walking" element={<Walking />} />
          <Route path="/training" element={<Training />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/kindergarden" element={<Kindergarden />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
