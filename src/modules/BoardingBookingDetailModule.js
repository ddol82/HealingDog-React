import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */

export const GET_BOARDING_BOOKING_DETAIL = 'boarding/GET_BOARDING_BOOKING_DETAIL';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_BOARDING_BOOKING_DETAIL]: () => {}
});

/* 리듀서 */
const BoardingBookingDetailReducer = handleActions(
    {

        [GET_BOARDING_BOOKING_DETAIL]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default BoardingBookingDetailReducer;