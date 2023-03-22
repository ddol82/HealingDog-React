import React, { Children, useState } from "react";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // 사이트바 상태관리
  const toggle = () => setIsOpen(!isOpen); // 사이드바 토글 전환
  const menuItem = [
    // 메뉴안에 있는 정보들
    {
      path: "/",
      name: "케어관리",
      icon: <FaTh />,
    },
    {
      path: "/walkingboard",
      name: "산책관리",
      icon: <FaUserAlt />,
    },
    {
      path: "/trainingboard",
      name: "훈련관리",
      icon: <FaRegChartBar />,
    },
    {
      path: "/beautyboard",
      name: "미용관리",
      icon: <FaCommentAlt />,
    },
    {
      path: "/boardingboard",
      name: "위탁돌봄관리",
      icon: <FaShoppingBag />,
    },
    {
      path: "/kindergarden",
      name: "개치원관리",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            HEALINGDOG
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div> {/*메뉴바 아이콘*/}
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
            {/*메뉴바 이름 정보*/}
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidbar;
