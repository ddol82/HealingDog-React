import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */

export const GET_BOARDING_BOOKING_LIST = 'boarding/GET_BOARDING_BOOKING_LIST';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_BOARDING_BOOKING_LIST]: () => {}
});

/* 리듀서 */
const boardingBookingReducer = handleActions(
    {

        [GET_BOARDING_BOOKING_LIST]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default boardingBookingReducer;