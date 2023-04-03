import { GET_BEAUTIES } from "../modules/BeautyModule";

export const callSelectBeautyInfoAPI = ({ providerCode }) => {
  console.log("[BeautyAPICalls] callSelectBeautyAPI Call");

  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/info/${providerCode}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());
    console.log("[BeautyAPICalls] callSelectBeautyInfoAPI RESULT : ", result);
    dispatch({ type: GET_BEAUTIES, payload: result.data });
  };
};
