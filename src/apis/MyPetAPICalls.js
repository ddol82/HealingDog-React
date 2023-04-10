import { GET_MYPET_LIST } from "../modules/MyPetModule";

export const callSelectMyPetProfileListAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/mypage/mypet/list`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());
    console.log(
      "[ByPetAPICalls] callSelectMyPetProfileListAPI RESULT : ",
      result
    );
    dispatch({ type: GET_MYPET_LIST, payload: result });
  };
};
