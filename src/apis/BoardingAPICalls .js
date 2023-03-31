import { GET_BOARDING_INFO } from "../modules/BoardingModule";
// export const initializerAPI = () => {

//     return (dispatch) => {
//         console.log('[MypageAPICalls] initializerAPI : initialize mypageReducer');

//         dispatch({ type: initializer,  payload: []});

//     }
// }

export const callSelectBoardingInfoAPI = ({ providerCode }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/api/v1/boarding-management/info`;

  return async (dispatch) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({                
        providerCode: providerCode            
      })
    }).then((response) => response.json());

    console.log("[ReviewAPICalls] callSelectBoardingInfoAPI RESULT : ", result);

    // alert(result.message);

    if (result.status === 200) {
      dispatch({ type: GET_BOARDING_INFO, payload: result });
    }
  };
};
