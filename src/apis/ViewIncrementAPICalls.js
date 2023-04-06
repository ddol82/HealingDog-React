import {
    POST_VIEW
} from '../modules/ViewIncrementModule';

export const callViewIncrementAPI = ({boardCode}) => {
    console.log('[CommunityAPICalls] callViewIncrementAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/details/view/${boardCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        console.log('[ProduceAPICalls] callViewIncrementAPI RESULT : ', result);

        dispatch({
            type: POST_VIEW,
            payload: ''
        })
    };
}