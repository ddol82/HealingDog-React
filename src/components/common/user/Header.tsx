import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decodeJwt } from "../../../utils/tokenUtils";
import { callLogoutAPI } from "../../../apis/MemberAPICalls";
import IconBeforeLogin from "../../../assets/icon/Login=false.svg";
import IconAfterLogin from "../../../assets/icon/Login=true.svg";
import IconLogout from "../../../assets/icon/Logout.svg";
import "../../../styles/Header.css";

interface MyToken {
  name: string;
  exp: number;
}

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin: string | null = window.localStorage.getItem("accessToken"); // Local Storage 에 token 정보 확인
  //const [loginModal, setLoginModal] = useState(false);
  const token: MyToken | null = decodeJwt<MyToken>(
    window.localStorage.getItem("accessToken")
  );

  //사용자 마이페이지
  const onClickMypageHandler = () => {
    // 토근이 만료되었을때 다시 로그인
    if (token?.exp === undefined || token.exp * 1000 < Date.now()) {
      //setLoginModal(true);
      dispatch<any>(callLogoutAPI());
      alert("사용자 정보가 유효하지 않습니다.");
      return navigate("/login");
    }
    navigate("/mypage");
  };

  //로그아웃
  const onClickLogoutHandler = () => {
    dispatch<any>(callLogoutAPI());

    alert("로그아웃이 되어 메인화면으로 이동합니다.");
    navigate("/", { replace: true });
    window.location.reload();
  };

  // 비로그인 상태
  const BeforeLogin = (): JSX.Element => (
    <div className="login-btn">
      <NavLink to="/login">
        <img src={IconBeforeLogin} alt="BeforeLogin" />
      </NavLink>
    </div>
  );
  // 로그인상태
  const AfterLogin = (): JSX.Element => (
    <>
      <div className="login-btn" onClick={onClickMypageHandler}>
        <img src={IconAfterLogin} alt="MyPage" />
      </div>
      <div className="login-btn icon-center" onClick={onClickLogoutHandler}>
        <img src={IconLogout} alt="AfterLogin" />
      </div>
    </>
  );
  return (
    <div className="header">
      <div className="header-btns">
        <div className="header-logo">
          <NavLink to={"/"}>
            <p className="logo">HEALING DOG</p>
          </NavLink>
        </div>
        <div className="header-navi">
          <NavLink to={"/"}>
            <p>예약</p>
          </NavLink>
          <NavLink to={"/"}>
            <p>예약내역</p>
          </NavLink>
          <NavLink to={"/community/lists/all/1"}>
            <p>커뮤니티</p>
          </NavLink>
          <NavLink to={"/"}>
            <p>기능</p>
          </NavLink>
        </div>
        <div className="header-auth">
          {
            // eslint-disable-next-line
            !!isLogin ? <AfterLogin /> : <BeforeLogin />
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
