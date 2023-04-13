import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BEAUTY = "beauty/GET_BEAUTY";
export const GET_BEAUTIES = "beauty/GET_BEAUTIES";
export const PUT_BEAUTY = "beauty/PUT_BEAUTY";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_BEAUTY]: () => {},
  // eslint-disable-next-line
  [GET_BEAUTIES]: () => {},
  // eslint-disable-next-line
  [PUT_BEAUTY]: () => {},
});

/* 리듀서 */
const beautyReducer = handleActions(
  {
    [GET_BEAUTY]: (state, { payload }) => {
      return payload;
    },
    [GET_BEAUTIES]: (state, { payload }) => {
      return payload;
    },
    [PUT_BEAUTY]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default beautyReducer;
