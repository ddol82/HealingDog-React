import {
    GET_CATEGORY
} from '../modules/CommunityModule';

export const callGetCategoryAPI = () => {
    console.log('[CommunityAPICalls] callGetCategoryAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/lists/categories`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        console.log('[CommunityAPICalls] callSearchProductAPI RESULT : ', result);

        dispatch({
            type: GET_CATEGORY,
            payload: result.data
        })
    }
}