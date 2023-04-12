import { GET_BEAUTY } from "../modules/BeautyModule";
import {
  GET_BEAUTY_RESERVATION,
  PUT_BEAUTY_RESERVATION,
  DELETE_BEAUTY_RESERVATION,
} from "../modules/BeautyReservationModule";

export const callSelectBeautyInfoAPI = () => {
  console.log("[BeautyAPICalls] callSelectBeautyAPI Call");

  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/info`;

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
    dispatch({ type: GET_BEAUTY, payload: result });
  };
};

export const callSelectBeautyReservationListAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/reservation`;

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
      "[BeautyAPICalls] callSelectBeautyReservationListAPI RESULT : ",
      result
    );
    dispatch({ type: GET_BEAUTY_RESERVATION, payload: result });
  };
};

export const callUpdateBeautyReservationAPI = ({ form }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/reservation`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PUT",
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
      body: form,
    }).then((response) => response.json());

    console.log(
      "[BeautyAPICalls] callUpdateBeautyReservationAPI RESULT : ",
      result
    );

    dispatch({ type: PUT_BEAUTY_RESERVATION, payload: result });
  };
};

export const callDeleteBeautyReservationAPI = ({
  beautyReservationListCode,
}) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/beauty-manage/reservation/${beautyReservationListCode}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log(
      "[BeautyAPICalls] callDeleteBeautyReservationAPI RESULT : ",
      result
    );

    dispatch({ type: DELETE_BEAUTY_RESERVATION, payload: result });
  };
};
