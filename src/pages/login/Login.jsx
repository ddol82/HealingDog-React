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

    /* dispatcher, selector 선언 */
    // 리액트 스토어의 dispatch 를 함수로 사용할수 있게 해주는 hook
	const dispatch = useDispatch();
	const loginMember = useSelector(state => state.memberReducer);
	// index.js - <Provider store={ store }>
	// store - const store = createStore(rootReducer, ...);
	// const rootReducer = combineReducers({memberReducer, ...});
	// loginMember = memberReducer(src/modules/MemberModules.js)

// state 선언 컴포넌트 내부 사용
    // 폼 데이터 State 로 관리
    const [form, setForm] = useState({
		type: 'user',
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

	// eslint-disable-next-line
    if(!!window.localStorage.getItem('accessToken')) {
        console.log("[Login] Login is already authenticated by the server");        
        return <Navigate to="/"/>
    }

// event handler

    // useState 에 input 변화값 저장
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동
    const onClickLoginHandler = () => {
		switch(form.type) {
			case "user" :
				dispatch(callLoginUserAPI({	// 로그인 유저
					form: form
				}));
				break;
			case "provider" :
				dispatch(callLoginProviderAPI({	// 로그인 제공자
					form: form
				}));
		}
    }
	// form의 key => email, password

	return (
		<>
			<div>
				<h1>HEALING DOG</h1>
			</div>
			<div>
				<label>
					<input
						type="radio"
						name="type"
						value="user"
						defaultChecked="true"
						onClick={ onChangeHandler }
					/>사용자 로그인
				</label>
				<label>
					<input
						type="radio"
						name="type"
						value="provider"
						onClick={ onChangeHandler }
					/>제공자 로그인
				</label>
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
					<button
						onClick={ onClickLoginHandler }
					>로그인</button>
				</div>
			</div>
		</>
	);
}

export default Login;
