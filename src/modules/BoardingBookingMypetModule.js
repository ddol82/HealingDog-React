import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */

export const GET_BOARDING_BOOKING_MYPET = 'boarding/GET_BOARDING_BOOKING_MYPET';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_BOARDING_BOOKING_MYPET]: () => {}
});

/* 리듀서 */
const boardingBookingMypetReducer = handleActions(
    {

        [GET_BOARDING_BOOKING_MYPET]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default boardingBookingMypetReducer;