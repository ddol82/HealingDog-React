import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BOARDING_INFO = 'boarding/GET_BOARDING_INFO';

// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_BOARDING_INFO]: () => {}
});

/* 리듀서 */
const boardingReducer = handleActions(
    {
        [GET_BOARDING_INFO]: (state, { payload }) => {
            
            return payload;
        }
    },
    initialState
);

export default boardingReducer;