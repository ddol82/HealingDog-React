import {
    GET_COMMENT,
    POST_COMMENT
} from '../modules/CommentModule';

export const callGetAllCommentAPI = ({ boardCode }) => {
    console.log('[CommentAPICalls] callGetAllCommentAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/lists/comments/${boardCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        console.log('[CommentAPICalls] callGetAllCommentAPI RESULT : ', result);

        dispatch({
            type: GET_COMMENT,
            payload: result.data
        })
    }
}

export const callRegistCommentAPI = ({ boardCode, form }) => {
    console.log('[CommentAPICalls] callGetAllCommentAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/write/comments/${boardCode}/0`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        }).then(response => response.json());

        console.log('[CommentAPICalls] callGetAllCommentAPI RESULT : ', result);

        dispatch({
            type: POST_COMMENT,
            payload: result.data
        })
    }
}