
import { 
    POST_LOGIN
} from '../modules/MemberModule';


// 로그인 API 로 form = { memberId:'id', memberPwd:'pwd'} 값 전달
export const callLoginUserAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/user/login`;
    // dispatch: 상태값 수정 메소드 ,getState: 현재 스토어의 상태 반환
    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                email: form.email,
                userPassword: form.password
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);

        alert(result.message);  

        if(result.status === 200){
            // localStorage 에 엑세스토큰 저장
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        // MemberModule 의 POST_LOGIN 엑션 수행 result 값으로 변경
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}

// 로그인 API 로 form = { memberId:'id', memberPwd:'pwd'} 값 전달
export const callLoginProviderAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/provider/login`;
    // dispatch: 상태값 수정 메소드 ,getState: 현재 스토어의 상태 반환
    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                email: form.email,
                providerPassword: form.password
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);

        alert(result.message);  

        if(result.status === 200){
            // localStorage 에 엑세스토큰 저장
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        // MemberModule 의 POST_LOGIN 엑션 수행 result 값으로 변경
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}


export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}



