import {
    GET_BOARD,
    GET_BOARD_DETAIL
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

export const callGetBoardDetailAPI = ({boardCode}) => {
    console.log('[CommunityAPICalls] callGetBoardDetailAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/detail/get/${boardCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        console.log('[ProduceAPICalls] callGetBoardDetailAPI RESULT : ', result);

        dispatch({
            type: GET_BOARD,
            payload: result.data
        })
    }
}