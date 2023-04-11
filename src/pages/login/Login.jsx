import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { callLoginUserAPI } from "../../apis/MemberAPICalls";
import { callLoginProviderAPI } from "../../apis/MemberAPICalls";
import "../../styles/Login.css";

function Login() {
  //필요기능선언
  // url 이동을 위한 네비게이트 선언
  const navigate = useNavigate();

  /* dispatcher, selector 선언 */
  // 리액트 스토어의 dispatch 를 함수로 사용할수 있게 해주는 hook
  const dispatch = useDispatch();
  const loginMember = useSelector((state) => state.memberReducer);
  // index.js - <Provider store={ store }>
  // store - const store = createStore(rootReducer, ...);
  // const rootReducer = combineReducers({memberReducer, ...});
  // loginMember = memberReducer(src/modules/MemberModules.js)

  // state 선언 컴포넌트 내부 사용
  // 폼 데이터 State 로 관리
  const [form, setForm] = useState({
    type: "user",
    email: "",
    password: "",
  });

  // useEffect 를 이용한 component logic 처리
  useEffect(
    () => {
      if (loginMember.status === 200) {
        console.log("[Login] Login SUCCESS {}", loginMember);
        if (form.type === "user") {
          navigate("/", { replace: true });
        }

        if (form.type === "provider") {
          navigate("/provider", { replace: true });
        }
      }
    }, // eslint-disable-next-line
    [loginMember]
  ); // loginMember 변화 감지

  // eslint-disable-next-line
  if (!!window.localStorage.getItem("accessToken")) {
    console.log("[Login] Login is already authenticated by the server");
    return <Navigate to="/" />;
  }

  // event handler

  // useState 에 input 변화값 저장
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동
  const onClickLoginHandler = () => {
    switch (form.type) {
      case "user":
        dispatch(
          callLoginUserAPI({
            // 로그인 유저
            form: form,
          })
        );
        break;
      case "provider":
        dispatch(
          callLoginProviderAPI({
            // 로그인 제공자
            form: form,
          })
        );
    }
  };
  // form의 key => email, password

  return (
    <div className="login-container">
      <main className="login-main">
        <div className="login-center">
          <div className="lgoin-titlename">HEALING DOG</div>
          <div className="login-checkmember">
            <input
              className="login-check"
              id="id-check-01"
              type="radio"
              name="type"
              value="user"
              defaultChecked="true"
              onClick={onChangeHandler}
            />
            <label htmlFor="id-check-01" className="login-check-label">
              사용자 로그인
            </label>
            <input
              className="login-check"
              id="id-check-02"
              type="radio"
              name="type"
              value="provider"
              onClick={onChangeHandler}
            />
            <label htmlFor="id-check-02" className="login-check-label">
              제공자 로그인
            </label>
          </div>
          <div className="login-input">
            <div className="login-input-common">
              <input
                className="login-input-email"
                type="text"
                name="email"
                placeholder="이메일"
                autoComplete="off"
                onChange={onChangeHandler}
              />
            </div>
            <div className="login-input-common">
              <input
                className="login-input-password"
                type="password"
                name="password"
                placeholder="비밀번호"
                autoComplete="off"
                onChange={onChangeHandler}
              />
            </div>
            <div className="login-click-link">
              <NavLink>이메일찾기</NavLink>
              <NavLink>비밀번호찾기</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
            </div>
            <div className="login-button">
              <button
                className="login-button-login"
                onClick={onClickLoginHandler}
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
