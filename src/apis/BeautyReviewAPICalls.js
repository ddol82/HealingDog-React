import { GET_BEAUTY_REVIEW } from "../modules/BeautyReviewModule";

export const callSelectBeautyReviewAPI = ({ num }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/last-review/${num}`;

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
      "[BeautyAPICalls] callSelectBeautyReviewsListAPI RESULT : ",
      result
    );
    dispatch({ type: GET_BEAUTY_REVIEW, payload: result });
  };
};
