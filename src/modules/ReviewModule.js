import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_REVIEWS = 'reviews/GET_REVIEWS';
export const GET_REVIEWS_COUNT = 'reviews/GET_REVIEWS_COUNT';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_REVIEWS]: () => {},
    // eslint-disable-next-line
    [GET_REVIEWS_COUNT]: () => {}
});

/* 리듀서 */
const reviewReducer = handleActions(
    {
        [GET_REVIEWS]: (state, { payload }) => {
            
            return payload;
        },
        [GET_REVIEWS_COUNT]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default reviewReducer;