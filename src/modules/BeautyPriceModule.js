import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BEAUTY_PRICE = "beauty/GET_BEAUTY_PRICE";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_BEAUTY_PRICE]: () => {},
});

/* 리듀서 */
const beautyPriceReducer = handleActions(
  {
    [GET_BEAUTY_PRICE]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default beautyPriceReducer;
