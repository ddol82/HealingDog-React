import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_COMMENT      = 'comment/GET_COMMENT';
export const POST_COMMENT     = 'comment/POST_COMMENT';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_COMMENT]: () => {},
    // eslint-disable-next-line
    [POST_COMMENT]: () => {}
});

const commentReducer = handleActions({
    [GET_COMMENT]: (state, { payload }) => payload,
    [POST_COMMENT]: (state, { payload }) => payload
}, initialState);

export default commentReducer;