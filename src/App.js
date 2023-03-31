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
import Review from "./components/review/Review";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Main from "./pages/user/Main";
import Community from "./components/community/Community";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Main/>}/>
          <Route path="community/" element={<Community />} />
          <Route path="reviews/:serviceCategoryCode" element={<Review />} />
          {/* <Route path="/care" element={<Care />} />
          <Route path="/walking" element={<Walking />} />
          <Route path="/training" element={<Training />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/kindergarden" element={<Kindergarden />} /> */}
        </Route>
        <Route path="/provider" element={<LayoutProvider />}>
          <Route path="/provider/care-board" element={<Careboard />} />
          <Route path="/provider/walking-board" element={<Walkingboard />} />
          <Route path="/provider/training-board" element={<Trainingboard />} />
          <Route path="/provider/beauty-board" element={<Beautyboard />} />
          <Route path="/provider/boarding-board" element={<Boardingboard />} />
          <Route path="/provider/kindergarden-board" element={<Kindergardenboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
