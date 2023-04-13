import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BEAUTY_RESERVATION = "beauty/GET_BEAUTY_RESERVATION";
export const PUT_BEAUTY_RESERVATION = "beauty/PUT_BEAUTY_RESERVATION";
export const DELETE_BEAUTY_RESERVATION = "beauty/PUT_BEAUTY_RESERVATION";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_BEAUTY_RESERVATION]: () => {},
  // eslint-disable-next-line
  [PUT_BEAUTY_RESERVATION]: () => {},
  // eslint-disable-next-line
  [DELETE_BEAUTY_RESERVATION]: () => {},
});

/* 리듀서 */
const beautyReservationReducer = handleActions(
  {
    [GET_BEAUTY_RESERVATION]: (state, { payload }) => {
      return payload;
    },
    [PUT_BEAUTY_RESERVATION]: (state, { payload }) => {
      return payload;
    },
    [PUT_BEAUTY_RESERVATION]: (state, { payload }) => {
      return payload;
    },
    [DELETE_BEAUTY_RESERVATION]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default beautyReservationReducer;
