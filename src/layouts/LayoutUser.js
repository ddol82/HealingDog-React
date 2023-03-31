import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div className="container">
      <h1>LayoutUser</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutUser;
