import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { callUserSignUpAPI } from "../../apis/MemberAPICalls";
import { callProviderSignUpAPI } from "../../apis/MemberAPICalls";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import "../../styles/SignUp.css";

function SignUp() {
  // url 이동을 위한 네비게이트 선언
  const navigate = useNavigate();

  /* dispatcher, selector 선언 */
  // 리액트 스토어의 dispatch 를 함수로 사용할수 있게 해주는 hook
  const dispatch = useDispatch();
  const loginMember = useSelector((state) => state.memberReducer);

  // state 선언 컴포넌트 내부 사용
  // 사용자,제공자 데이터 State 로 관리
  const [selectedOption, setSelectedOption] = useState("user");
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [user, setUser] = useState({
    type: "user",
    name: "",
    email: "",
    password: "",
    phone: "",
    nickname: "",
    address: "",
    simpleIntro: "",
    selfIntro: "",
    blackList: "",
    role: "",
  });

  const [provider, setProvider] = useState({
    type: "provider",
    name: "",
    email: "",
    password: "",
    phone: "",
    beautyApproval: "",
    petSitterApproval: "",
    trainersApproval: "",
    kindergardenApproval: "",
    boardingApproval: "",
    blackList: "",
    role: "",
  });

  // useEffect 를 이용한 component logic 처리
  useEffect(
    () => {
      if (loginMember.status === 201) {
        console.log("[Login] SignUp SUCCESS {}", loginMember);
        navigate("/login", { replace: true });
      }
    }, // eslint-disable-next-line
    [loginMember]
  ); // loginMember 변화 감지

  // event handler

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeHandler2 = (e) => {
    setProvider({
      ...provider,
      [e.target.name]: e.target.value,
    });
  };

  const onClickBackHandler = () => {
    // 돌아가기 클릭시 로그인으로 이동
    navigate("/login", { replace: true });
  };

  // 회원가입 버튼 클릭시 디스패처 실행
  const onClickLoginHandler = () => {
    dispatch(
      callUserSignUpAPI({
        user: user,
      })
    );
  };

  const onClickLoginHandler2 = () => {
    dispatch(
      callProviderSignUpAPI({
        provider: provider,
      })
    );
  };

  return (
    <div className="signup-container">
      <main className="signup-main">
        <div className="signup-center">
          <div className="signup-titlename">HEALING DOG</div>
          <div className="signup-checkmember">
            <input
              className="signup-check"
              id="id-check-01"
              type="radio"
              name="type"
              value="user"
              checked={selectedOption === "user"}
              onChange={() => setSelectedOption("user")}
              onClick={onChangeHandler}
            />
            <label htmlFor="id-check-01" className="signup-check-label">
              사용자 회원가입
            </label>
            <input
              className="signup-check"
              id="id-check-02"
              type="radio"
              name="type"
              value="provider"
              checked={selectedOption === "provider"}
              onChange={() => setSelectedOption("provider")}
              onClick={onChangeHandler}
            />
            <label htmlFor="id-check-02" className="signup-check-label">
              제공자 회원가입
            </label>
          </div>
          <div className="signup-input">
            {selectedOption === "user" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="name"
                  placeholder="이름"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>
            )}
            {selectedOption === "user" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="email"
                  placeholder="이메일"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>
            )}
            {selectedOption === "user" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>
            )}
            {selectedOption === "user" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="phone"
                  placeholder="연락처"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>
            )}
            {selectedOption === "user" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="nickname"
                  placeholder="닉네임"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
              </div>
            )}
            {selectedOption === "user" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="address"
                  placeholder="주소"
                  autoComplete="off"
                  onChange={onChangeHandler}
                />
                <button
                  className="signup-button-findaddress"
                  type="button"
                  onClick={openPostCode}
                >
                  검색하기
                </button>
                <div id="popupDom">
                  {isPopupOpen && (
                    <PopupDom>
                      <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                  )}
                </div>
              </div>
            )}
            {selectedOption === "provider" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="name"
                  placeholder="이름"
                  autoComplete="off"
                  onChange={onChangeHandler2}
                />
              </div>
            )}
            {selectedOption === "provider" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="email"
                  placeholder="이메일"
                  autoComplete="off"
                  onChange={onChangeHandler2}
                />
              </div>
            )}
            {selectedOption === "provider" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  autoComplete="off"
                  onChange={onChangeHandler2}
                />
              </div>
            )}
            {selectedOption === "provider" && (
              <div className="signup-input-common">
                <input
                  className="signup-input-column"
                  type="text"
                  name="phone"
                  placeholder="연락처"
                  autoComplete="off"
                  onChange={onChangeHandler2}
                />
              </div>
            )}
            {selectedOption === "user" && (
              <div className="signup-button">
                <button
                  className="signup-button-login"
                  onClick={onClickLoginHandler}
                >
                  회원가입
                </button>
              </div>
            )}
            {selectedOption === "provider" && (
              <div className="signup-button">
                <button
                  className="signup-button-login"
                  onClick={onClickLoginHandler2}
                >
                  회원가입
                </button>
              </div>
            )}
            <div className="signup-button-back">
              <button
                className="signup-button-login"
                onClick={onClickBackHandler}
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default SignUp;
