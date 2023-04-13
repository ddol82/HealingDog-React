import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_BOARDING_INCOME = 'reviews/POST_BOARDING_INCOME';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [POST_BOARDING_INCOME]: () => {}
});

/* 리듀서 */
const boardingIncomeReducer = handleActions(
    {
        [POST_BOARDING_INCOME]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default boardingIncomeReducer;