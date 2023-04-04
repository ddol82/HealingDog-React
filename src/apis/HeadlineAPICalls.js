import {
    GET_HEADLINE
} from '../modules/HeadlineModule.js';

export const callGetHeadlineAPI = () => {
    console.log('[CommunityAPICalls] callGetHeadlineAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/lists/importants`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        console.log('[ProduceAPICalls] callGetHeadlineAPI RESULT : ', result);

        dispatch({
            type: GET_HEADLINE,
            payload: result.data
        })
    };
}