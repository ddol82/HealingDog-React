import Header from "components/common/user/Header";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <div className="container">
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutUser;
