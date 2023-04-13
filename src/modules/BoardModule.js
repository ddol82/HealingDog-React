import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARD        = 'community/GET_BOARD';
export const GET_BOARD_DETAIL = 'community/GET_BOARD_DETAIL';
export const POST_BOARD_REGIST= 'community/POST_BOARD_REGIST';
export const DELETE_BOARD     = 'community/POST_BOARD_DELETE';
export const PUT_BOARD_UPDATE = 'community/PUT_BOARD_UPDATE';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_BOARD]: () => {},
    // eslint-disable-next-line
    [GET_BOARD_DETAIL]: () => {},
    // eslint-disable-next-line
    [POST_BOARD_REGIST]: () => {},
    // eslint-disable-next-line
    [DELETE_BOARD]: () => {},
    // eslint-disable-next-line
    [PUT_BOARD_UPDATE]: () => {}
});

/* 리듀서 */
const boardReducer = handleActions({
    [GET_BOARD]: (state, { payload }) => payload,
    [GET_BOARD_DETAIL]: (state, { payload }) => payload,
    [POST_BOARD_REGIST]: (state, { payload }) => payload,
    [DELETE_BOARD]: (state, { payload }) => payload,
    [PUT_BOARD_UPDATE]: (state, { payload }) => payload
}, initialState);

export default boardReducer;