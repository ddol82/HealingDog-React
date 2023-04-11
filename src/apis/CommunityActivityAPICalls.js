import {
    GET_ACTIVITY,
    POST_VIEW,
    POST_LIKE,
    POST_SHARE
} from '../modules/CommunityActivityModule';

export const callGetActivityAPI = ({boardCode}) => {
    console.log('[CommunityAPICalls] callGetActivityAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/details/activities/${boardCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        console.log('[ProduceAPICalls] callGetActivityAPI RESULT : ', result);

        dispatch({
            type: GET_ACTIVITY,
            payload: result.data
        })
    }
}

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

export const callShareIncrementAPI = ({activityData, boardCode}) => {
    console.log('[CommunityAPICalls] callShareIncrementAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/details/share/${boardCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*"
            }
        }).then(response => response.json());

        const resultData = {
            ...activityData,
            share: activityData.share + result.data
        }

        console.log('[ProduceAPICalls] callShareIncrementAPI RESULT : ', resultData);

        dispatch({
            type: POST_SHARE,
            payload: resultData
        })
    };
}

export const callLikeChangeAPI = ({activityData, boardCode, isLike}) => {
    console.log('[CommunityAPICalls] callShareIncrementAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/community/boards/details/like/${boardCode}/${isLike ? 'down' : 'up'}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        }).then(response => response.json());

        const resultData = {
            ...activityData,
            like: activityData.like + result.data
        }

        console.log('[ProduceAPICalls] callShareIncrementAPI RESULT : ', resultData);

        dispatch({
            type: POST_LIKE,
            payload: resultData
        })
    };
}