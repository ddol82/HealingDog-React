import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BEAUTY_REVIEWS = "beauty/GET_BEAUTY_REVIEWS";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_BEAUTY_REVIEWS]: () => {},
});

/* 리듀서 */
const beautyReviewListReducer = handleActions(
  {
    [GET_BEAUTY_REVIEWS]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default beautyReviewListReducer;
