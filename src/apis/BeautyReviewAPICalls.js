import {
  GET_BEAUTY_REVIEW,
  GET_BEAUTY_REVIEWS,
} from "../modules/BeautyReviewModule";

export const callSelectBeautyReviewAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/last-review`;

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

export const callSelectBeautyReviewsListAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/review`;

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
    dispatch({ type: GET_BEAUTY_REVIEWS, payload: result });
  };
};
