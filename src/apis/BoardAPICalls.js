import {
    GET_BOARD
} from '../modules/BoardModule.js';

export const callGetBoardListAPI = ({categoryType, currPage}) => {
    console.log('[CommunityAPICalls] callGetBoardListAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/lists/boards/${categoryType}/${currPage}`;

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
            type: GET_BOARD,
            payload: result.data
        })
    }
}