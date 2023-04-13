import { 
  GET_REVIEWS,
  GET_REVIEWS_COUNT
} from "../modules/ReviewModule";
// export const initializerAPI = () => {

//     return (dispatch) => {
//         console.log('[MypageAPICalls] initializerAPI : initialize mypageReducer');

//         dispatch({ type: initializer,  payload: []});

//     }
// }

export const callSelectReviewsAPI = ({ serviceCategoryCode }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/reviews/${serviceCategoryCode}`;

  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      }
    }).then((response) => response.json());

    console.log("[ReviewAPICalls] callSelectReviewsAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_REVIEWS, payload: result });
    }
  };
};

export const callSelectReviewsCountAPI = ({ serviceCategoryCode }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/reviews/${serviceCategoryCode}/count`;

  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
      }
    }).then((response) => response.json());

    console.log("[ReviewAPICalls] callSelectReviewsCountAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_REVIEWS_COUNT, payload: result });
    }
  };
};

