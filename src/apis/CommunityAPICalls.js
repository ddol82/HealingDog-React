import {
    GET_CATEGORY,
    GET_HEADLINE,
    GET_BOARD
} from '../modules/CommunityModule.js';

export const callGetCategoryAPI = ({categoryType}) => {
    console.log('[CommunityAPICalls] callGetCategoryAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/lists/categories?cat=${categoryType}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        console.log('[ProduceAPICalls] callSearchProductAPI RESULT : ', result);

        dispatch({
            type: GET_CATEGORY,
            payload: result.data
        })
    }
}