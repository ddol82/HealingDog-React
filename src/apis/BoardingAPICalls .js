import { 
  GET_BOARDING_INFO
} from "../modules/BoardingModule";
import { 
  GET_BOARDING_BOOKING_LIST
} from "../modules/BoardingBookingModule";
import { 
  GET_BOARDING_BOOKING_MYPET
} from "../modules/BoardingBookingMypetModule";


// export const initializerAPI = () => {

//     return (dispatch) => {
//         console.log('[MypageAPICalls] initializerAPI : initialize mypageReducer');

//         dispatch({ type: initializer,  payload: []});

//     }
// }

export const callSelectBoardingInfoAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/boarding-management/info`;

  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      }
    }).then((response) => response.json());

    console.log("[BoardingAPICalls] callSelectBoardingInfoAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_BOARDING_INFO, payload: result });
    }
  };
};

export const callSelectBoardingBookingAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/boarding-management/booking`;

  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      }
    }).then((response) => response.json());

    console.log("[BoardingAPICalls] callSelectBoardingBookingAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_BOARDING_BOOKING_LIST, payload: result });
    }
  };
};

export const callSelectBoardingBookingMypetAPI = (bookingForm) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/boarding-management/booking/mypet`;
  
  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      },
      body: JSON.stringify({
        userCode: bookingForm.userCode,
        mypetCode: bookingForm.mypetCode
      })
    }).then((response) => response.json());

    console.log("[BoardingAPICalls] callSelectBoardingBookingMypetAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_BOARDING_BOOKING_MYPET, payload: result });
    }
  };
};