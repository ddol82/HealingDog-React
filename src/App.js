import "./styles/reset.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beautyboard from "./pages/Beautyboard";
import BoardingManagement from "./pages/BoardingManagement";
import BeautyReservationDetail from "./pages/beauty/BeautyReservationDetail";
import Careboard from "./pages/Careboard";
import Kindergardenboard from "./pages/Kindergardenboard";
import Trainingboard from "./pages/Trainingboard";
import Walkingboard from "./pages/Walkingboard";
import LayoutProvider from "./layouts/LayoutProvider";
import LayoutUser from "./layouts/LayoutUser";
import Review from "./components/review/Review";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Main from "./pages/user/Main";
import Community from "./pages/community/Community";
import Detail from "./pages/community/Detail";
import BoardWrite from "./pages/community/BoardWrite";
import MyPage from "./pages/mypage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Main />} />
          <Route
            path="/community/lists/:categoryType/:currPage"
            element={<Community />}
          />
          <Route
            path="/community/boards/detail/:boardCode"
            element={<Detail />}
          />
          <Route path="/community/boards/write" element={<BoardWrite />} />
          <Route path="/reviews/:serviceCategoryCode" element={<Review />} />
          <Route path="/mypage" element={<MyPage />} />
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
          <Route
            path="/provider/beauty-board/:id"
            element={<BeautyReservationDetail />}
          />
          <Route
            path="/provider/boarding-board"
            element={<BoardingManagement />}
          />
          <Route
            path="/provider/kindergarden-board"
            element={<Kindergardenboard />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
