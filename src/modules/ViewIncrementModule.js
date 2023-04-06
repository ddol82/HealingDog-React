import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_VIEW     = 'community/POST_VIEW';
// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [POST_VIEW]: () => {},
});

/* 리듀서 */
const viewIncrementReducer = handleActions({
    [POST_VIEW]: (state, { payload }) => payload
}, initialState);

export default viewIncrementReducer;