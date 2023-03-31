import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from 'react-router-dom';
import { callLoginUserAPI } from '../../apis/MemberAPICalls';
import { callLoginProviderAPI } from '../../apis/MemberAPICalls'

function Login() {

  //필요기능선언
    // url 이동을 위한 네비게이트 선언
    const navigate = useNavigate();

    // redux 이용 dispatcher selector 선언
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);
    

// state 선언 컴포넌트 내부 사용
    // 폼 데이터 State 로 관리
    const [form, setForm] = useState({
      email: '',
      password: ''
    });

// useEffect 를 이용한 component logic 처리
    useEffect(() => {
            
        if(loginMember.status === 200){
            console.log("[Login] Login SUCCESS {}", loginMember);
            navigate("/", { replace: true });
        }

    } // eslint-disable-next-line
    ,[loginMember]); // loginMember 변화 감지


// 로그인 상태일 시 로그인페이지로 접근 방지
    // if(loginMember.length > 0) {
    //     console.log("[Login] Login is already authenticated by the server");        
    //     return <Navigate to="/"/>
    // }

// event handler

    // useState 에 input 변화값 저장
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동
    const onClickLoginHandler = (e) => {
      if (e.target.name == "user") {
        dispatch(callLoginUserAPI({	// 로그인 유저
          form: form
        }));
      } else if (e.target.name == "provider") {
        dispatch(callLoginProviderAPI({	// 로그인 제공자
          form: form
        }));
      }

    }


  return (
    <div>
      <div>
        <div>
          <div>
            <h1>HEALING DOG</h1>
          </div>
          <div>
            <button name="user" onClick={ onClickLoginHandler }>사용자 로그인</button>
            <button name="provider" onClick={ onClickLoginHandler }>제공자 로그인</button>
          </div>
          <div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                autoComplete="off"
                onChange={ onChangeHandler }
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                autoComplete="off"
                onChange={ onChangeHandler }
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
