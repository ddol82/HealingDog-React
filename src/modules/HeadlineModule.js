import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_HEADLINE     = 'community/GET_HEADLINE';
// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_HEADLINE]: () => {},
});

/* 리듀서 */
const communityReducer = handleActions({
    [GET_HEADLINE]: (state, { payload }) => payload
}, initialState);

export default communityReducer;