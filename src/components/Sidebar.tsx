import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuLogo from "../assets/icon/icon=menu.svg";
import iconCare from "../assets/icon/TYPE=care, Style=true.svg";
import iconWalking from "../assets/icon/TYPE=walking, Style=true.svg";
import iconTraining from "../assets/icon/TYPE=training, Style=true.svg";
import iconBeauty from "../assets/icon/TYPE=beauty, Style=true.svg";
import iconBoarding from "../assets/icon/TYPE=boarding, Style=true.svg";
import iconKindergarden from "../assets/icon/TYPE=kindergarden, Style=true.svg";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // 사이트바 상태관리
  const toggle = () => setIsOpen(!isOpen); // 사이드바 토글 전환
  // 메뉴안에 있는 정보들
  interface MenuItem {
    path: string;
    name: string;
    icon: JSX.Element;
  }
  const menuItem: MenuItem[] = [
    {
      path: "/care-board",
      name: "케어관리",
      icon: <img src={iconCare} alt="care" />,
    },
    {
      path: "/walking-board",
      name: "산책관리",
      icon: <img src={iconWalking} alt="care" />,
    },
    {
      path: "/training-board",
      name: "훈련관리",
      icon: <img src={iconTraining} alt="care" />,
    },
    {
      path: "/beauty-board",
      name: "미용관리",
      icon: <img src={iconBeauty} alt="care" />,
    },
    {
      path: "/boarding-board",
      name: "위탁돌봄관리",
      icon: <img src={iconBoarding} alt="care" />,
    },
    {
      path: "/kindergarden-board",
      name: "개치원관리",
      icon: <img src={iconKindergarden} alt="care" />,
    },
  ];
  return (
    <>
      <div style={{ width: isOpen ? "220px" : "50px" }} className="sidebar">
        <div
          style={{ padding: isOpen ? "66px 23px" : "66px 13px" }}
          className="top_section"
        >
          <h1 className="logo">HEALINGDOG</h1>
          <div style={{ marginLeft: isOpen ? "10px" : "0px" }} className="bars">
            <img src={menuLogo} alt="menu" onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="icon">{item.icon}</div> {/*메뉴바 아이콘*/}
            <div className="link-text">{item.name}</div>
            {/*메뉴바 이름 정보*/}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
