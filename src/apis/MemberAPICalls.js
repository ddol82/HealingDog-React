import { GET_MYPET, POST_LOGIN, POST_SIGNUP } from "../modules/MemberModule";

// 로그인 API 로 form = { memberId:'id', memberPwd:'pwd'} 값 전달
export const callLoginUserAPI = ({ form }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/user/login`;
  // dispatch: 상태값 수정 메소드 ,getState: 현재 스토어의 상태 반환
  return async (dispatch, getState) => {
    // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
    // 서버에서 cors 허용을 해주어야 함
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: form.email,
        userPassword: form.password,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(`[MemberAPICalls] callLoginUserAPI : ${error}`);
        console.log(`${process.env.REACT_APP_RESTAPI_IP} 실행 확인해주세요~`);
        alert("연결 오류가 발생했습니다.");
      });

    console.log("[MemberAPICalls] callLoginUserAPI RESULT : ", result);

    if (result.status === 200) {
      // localStorage 에 엑세스토큰 저장
      window.localStorage.setItem("accessToken", result.data.accessToken);
    }
    // MemberModule 의 POST_LOGIN 액션 수행 result 값으로 변경
    dispatch({ type: POST_LOGIN, payload: result });
  };
};

// 로그인 API 로 form {(type), email, password} 값 전달
export const callLoginProviderAPI = ({ form }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/provider/login`;
  // dispatch: 상태값 수정 메소드, getState: 현재 스토어의 상태 반환
  return async (dispatch, getState) => {
    // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
    // 서버에서 cors 허용을 해주어야 함
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: form.email,
        providerPassword: form.password,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(`[MemberAPICalls] callLoginProviderAPI : ${error}`);
        console.log(`${process.env.REACT_APP_RESTAPI_IP} 실행 확인해주세요~`);
        alert("연결 오류가 발생했습니다.");
      });

    console.log("[MemberAPICalls] callLoginProviderAPI RESULT : ", result);

    alert(result.message);

    if (result.status === 200) {
      // localStorage 에 엑세스토큰 저장
      window.localStorage.setItem("accessToken", result.data.accessToken);
    }
    // MemberModule 의 POST_LOGIN 액션 수행 result 값으로 변경
    dispatch({ type: POST_LOGIN, payload: result });
  };
};

export const callLogoutAPI = () => {
  return async (dispatch, getState) => {
    window.localStorage.removeItem("accessToken");
    console.log("[MemberAPICalls] callLogoutAPI RESULT : SUCCESS");
    dispatch({ type: POST_LOGIN, payload: "" });
  };
};

export const callMypetAPI = ({ beautyReservationListCode }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/reservation/${beautyReservationListCode}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());
    console.log("[MemberAPICalls] callMypetAPI RESULT : ", result);
    dispatch({ type: GET_MYPET, payload: result });
  };
};

export const callUserSignUpAPI = ({ user }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/user/signup`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        userPassword: user.password,
        phone: user.phone,
        nickname: user.nickname,
        address: user.address,
        simpleIntro: user.simpleIntro,
        selfIntro: user.selfIntro,
        blacklist: user.blacklist,
        role: user.role,
      }),
    }).then((response) => response.json());

    console.log("[MemberAPICalls] callUserSignUpAPI RESULT : ", result);

    if (result.status === 201) {
      dispatch({ type: POST_SIGNUP, payload: result });
    }
  };
};

export const callProviderSignUpAPI = ({ provider }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/provider/signup`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        name: provider.name,
        email: provider.email,
        providerPassword: provider.password,
        phone: provider.phone,
        beautyApproval: provider.beautyApproval,
        petsitterApproval: provider.petsitterApproval,
        trainersApproval: provider.trainersApproval,
        kindergardenApproval: provider.kindergardenApproval,
        boardingApproval: provider.boardingApproval,
        blacklist: provider.blacklist,
        role: provider.role,
      }),
    }).then((response) => response.json());

    console.log("[MemberAPICalls] callProviderSignUpAPI RESULT : ", result);

    if (result.status === 201) {
      dispatch({ type: POST_SIGNUP, payload: result });
    }
  };
};
