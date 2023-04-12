import { 
  GET_BOARDING_INFO
} from "../modules/BoardingModule";
import { 
  GET_BOARDING_BOOKING_LIST
} from "../modules/BoardingBookingModule";
import { 
  GET_BOARDING_BOOKING_MYPET
} from "../modules/BoardingBookingMypetModule";
import { 
  GET_BOARDING_REVIEW_SUMMARY
} from "../modules/BoardingReviewModule";
import { 
  POST_BOARDING_INCOME
} from "../modules/BoardingIncomeModule";


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

export const callSelectBoardingReviewAPI = () => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/boarding-management/review`;

  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      }
    }).then((response) => response.json());

    console.log("[BoardingAPICalls] callSelectBoardingReviewAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_BOARDING_REVIEW_SUMMARY, payload: result });
    }
  };
};


export const callSelectBoardingIncomeAPI = (selectedDate) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/boarding-management/income`;
  
  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      },
      body: JSON.stringify({
        selectedDate: selectedDate
      })
    }).then((response) => response.json());

    console.log("[BoardingAPICalls] callSelectBoardingIncomeAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: POST_BOARDING_INCOME, payload: result });
    }
  };
};