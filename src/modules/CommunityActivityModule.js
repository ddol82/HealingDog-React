import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_ACTIVITY  = 'community/GET_ACTIVITY';
export const POST_VIEW     = 'community/POST_VIEW';
export const POST_SHARE    = 'community/POST_SHARE';
export const POST_LIKE    = 'community/POST_LIKE';
export const POST_COMMENT    = 'community/POST_COMMENT';
// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_ACTIVITY]: () => {},
    // eslint-disable-next-line
    [POST_VIEW]: () => {},
    // eslint-disable-next-line
    [POST_VIEW]: () => {}
});

/* 리듀서 */
const viewActivityReducer = handleActions({
    [GET_ACTIVITY]: (state, { payload }) => payload,
    [POST_VIEW]: (state, { payload }) => payload,
    [POST_SHARE]: (state, { payload }) => payload,
    [POST_LIKE]: (state, { payload }) => payload,
    [POST_COMMENT]: (state, { payload }) => payload,
    default: (state, { payload }) => state
}, initialState);

export default viewActivityReducer;