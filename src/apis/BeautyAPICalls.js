import { GET_BEAUTY, GET_BEAUTIES } from "../modules/BeautyModule";

export const callSelectBeautyInfoAPI = ({ search }) => {
  console.log("[BeautyAPICalls] callSelectBeautyAPI Call");

  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/beauty-manage/info`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[BeautyAPICalls] callSelectBeautyInfoAPI RESULT : ", result);

    dispatch({ type: GET_BEAUTIES, payload: result.data });
  };
};
