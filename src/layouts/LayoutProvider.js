import { Outlet } from "react-router-dom";
import Header from "../components/common/provider/Header";
import Sidebar from "../components/Sidebar";

const LayoutProvider = () => {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutProvider;
