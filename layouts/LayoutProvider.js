import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";

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
