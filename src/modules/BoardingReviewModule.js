import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDING_REVIEW_SUMMARY = 'boarding/GET_BOARDING_REVIEW_SUMMARY';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_BOARDING_REVIEW_SUMMARY]: () => {}
});

/* 리듀서 */
const boardingReviewReducer = handleActions(
    {
        [GET_BOARDING_REVIEW_SUMMARY]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default boardingReviewReducer;