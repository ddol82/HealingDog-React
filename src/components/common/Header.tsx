import React from "react";
import { NavLink } from "react-router-dom";
import IconBeforeLogin from "../../assets/icon/Login=false.svg";
import IconAfterLogin from "../../assets/icon/Login=true.svg";
import { useState } from "react";
import { decodeJwt } from "../../utils/tokenUtils";
import "../../styles/Header.css";

const Header = () => {
  const isLogin = window.localStorage.getItem("accessToken"); // Local Storage 에 token 정보 확인
  const [loginModal, setLoginModal] = useState(false);

  const onClickMypageHandler = () => {
    // 토근이 만료되었을때 다시 로그인

    interface MyToken {
      name: string;
      exp: number;
      // whatever else is in the JWT.
    }
    const token: any = decodeJwt<MyToken>(
      window.localStorage.getItem("accessToken")
    );

    if (token.exp * 1000 < Date.now()) {
      setLoginModal(true);
      return;
    }
  };

  // 비로그인 상태
  const BeforeLogin = () => {
    return (
      <div className="login-btn">
        <NavLink to="/login">
          <img src={IconBeforeLogin} alt="BeforeLogin" />
        </NavLink>
      </div>
    );
  };
  // 로그인상태
  const AfterLogin = () => {
    return (
      <div className="login-btn">
        <button onClick={onClickMypageHandler}>
          <NavLink to="/login">
            <img src={IconAfterLogin} alt="AfterLogin" />
          </NavLink>
        </button>
      </div>
    );
  };
  return (
    <div className="heder">
      <div className="header-btns">
        {/* 로그인상태가 null or undefined 이면 비로그인출력, 아니면 로그인상태 출력 */}
        {isLogin == null || isLogin === undefined ? (
          <BeforeLogin />
        ) : (
          <AfterLogin />
        )}
      </div>
    </div>
  );
};

export default Header;
