import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>HEALING DOG</h1>
          </div>
          <div>
            <button>사용자 로그인</button>
            <button>제공자 로그인</button>
          </div>
          <div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="password"
                name="userPassword"
                placeholder="비밀번호"
                autoComplete="off"
              />
            </div>
            <div>
              <NavLink>이메일찾기</NavLink>
              <NavLink>비밀번호찾기</NavLink>
              <NavLink>회원가입</NavLink>
            </div>
            <div>
              <button>로그인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
