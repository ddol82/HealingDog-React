import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_CATEGORY     = 'community/GET_CATEGORY';
export const POST_COMMENT     = 'comment/POST_COMMENT';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_CATEGORY]: () => {},
    // eslint-disable-next-line
    [POST_COMMENT]: () => {}
});

/* 리듀서 */
const communityReducer = handleActions({
    [GET_CATEGORY]: (state, { payload }) => payload,
    [POST_COMMENT]: (state, { payload }) => payload
}, initialState);

export default communityReducer;