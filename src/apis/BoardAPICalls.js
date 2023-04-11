import {
    GET_BOARD,
    GET_BOARD_DETAIL,
    POST_BOARD_REGIST,
    POST_BOARD_DELETE
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
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        console.log('[ProduceAPICalls] callGetBoardDetailAPI RESULT : ', result);

        dispatch({
            type: GET_BOARD_DETAIL,
            payload: result.data
        })
    }
}

export const callBoardRegistAPI = ({form}) => {
    console.log('[CommunityAPICalls] callBoardRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/write/confirm`;

    return async (dispatch, getState) => {
        let reader = null;
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        }).then(response => response.json());
        
        console.log('[ProduceAPICalls] callBoardRegistAPI RESULT : ', result);
        dispatch({
            type: POST_BOARD_REGIST,
            payload: result.data
        });
    }
}

export const callDeleteBoardAPI = ({boardCode}) => {
    console.log('[CommunityAPICalls] callDeleteBoardAPI Call');
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/delete/${boardCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "DELETE",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(res => res.json());

        console.log('[ProduceAPICalls] callDeleteBoardAPI RESULT : ', result);

        dispatch({
            type: POST_BOARD_DELETE,
            payload: result.data
        })
    }
}

