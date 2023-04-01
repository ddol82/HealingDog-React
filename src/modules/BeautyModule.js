import { createActions, handleActions } from "redux-actions";

/* 초기값 */

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BEAUTY = "beauty/GET_BEAUTY";
export const GET_BEAUTIES = "beauty/GET_BEAUTIES";

// const actions = createActions({
//   [GET_BEAUTY]: () => {},
//   [GET_BEAUTIES]: () => {},
// });

/* 리듀서 */
const beautyReducer = handleActions(
  {
    [GET_BEAUTY]: (state, { payload }) => {
      return payload;
    },
    [GET_BEAUTIES]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default beautyReducer;
