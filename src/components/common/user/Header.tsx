import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IconBeforeLogin from "../../../assets/icon/Login=false.svg";
import IconAfterLogin from "../../../assets/icon/Login=true.svg";
import { decodeJwt } from "../../../utils/tokenUtils";
import { callLogoutAPI } from "../../../apis/MemberAPICalls";

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
        if (token?.exp === undefined || (token.exp * 1000 < Date.now())) {
            //setLoginModal(true);
            return <NavLink to="/login"/>;
        }
        alert('마이페이지 연결 필요!');
    };

    //로그아웃
    const onClickLogoutHandler = () => {
        dispatch<any>(callLogoutAPI());
        
        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }
    

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
        <div className="login-btn">
            <button onClick={onClickMypageHandler}>
                <NavLink to="/login">
                    <img src={IconAfterLogin} alt="MyPage" />
                </NavLink>
            </button>
            <button onClick={onClickLogoutHandler}>
                <NavLink to="/login">
                    <img src={IconAfterLogin} alt="AfterLogin" />
                </NavLink>
            </button>
        </div>
    );
  return (
    <div className="header">
        {// eslint-disable-next-line
        !!isLogin ? (
            <AfterLogin />
        ) : (
            <BeforeLogin />
        )}
    </div>
  );
};

export default Header;
