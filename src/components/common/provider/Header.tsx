import { NavLink, Navigate, useNavigate } from "react-router-dom";
import IconBeforeLogin from "../../../assets/icon/Login=false.svg";
import IconAfterLogin from "../../../assets/icon/Login=true.svg";
import IconLogout from "../../../assets/icon/Logout.svg";
import { callLogoutAPI } from "../../../apis/MemberAPICalls";
//import { useState } from "react";
import { decodeJwt } from "../../../utils/tokenUtils";
import "../../../styles/Header.css";
import { useDispatch } from "react-redux";

interface MyToken {
  name: string;
  exp: number;
}

const Header = () => {
  const isLogin: string | null = window.localStorage.getItem("accessToken"); // Local Storage 에 token 정보 확인
  //const [loginModal, setLoginModal] = useState(false);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const onClickMypageHandler = () => {
    // 토근이 만료되었을때 다시 로그인
    const token: MyToken | null = decodeJwt<MyToken>(
      window.localStorage.getItem("accessToken")
    );

    if (token?.exp === undefined || token.exp * 1000 < Date.now()) {
      //setLoginModal(true);
      return <Navigate to="/login" />;
    }
  };

  //로그아웃
  const onClickLogoutHandler = () => {
    dispatch<any>(callLogoutAPI());

    alert("로그아웃이 되어 메인화면으로 이동합니다.");
    navigate("/", { replace: true });
    window.location.reload();
  };

  // 비로그인 상태
  const BeforeLogin = () => {
    return (
      <div className="login-btn" onClick={onClickMypageHandler}>
        <NavLink to="/login">
          <img src={IconBeforeLogin} alt="BeforeLogin" />
        </NavLink>
      </div>
    );
  };
  // 로그인상태
  const AfterLogin = (): JSX.Element => (
    <div className="login-area">
      <div className="login-btn" onClick={onClickMypageHandler}>
        <img src={IconAfterLogin} alt="MyPage" />
      </div>
      <div className="login-btn icon-center" onClick={onClickLogoutHandler}>
        <img src={IconLogout} alt="AfterLogin" />
      </div>
    </div>
  );

  return (
    <div className="header-provider">
      <div className="header-provider-btns">
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
