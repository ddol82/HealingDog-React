import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_BEAUTY_REVIEW = "beauty/GET_BEAUTY_REVIEW";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_BEAUTY_REVIEW]: () => {},
});

/* 리듀서 */
const beautyReviewReducer = handleActions(
  {
    [GET_BEAUTY_REVIEW]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default beautyReviewReducer;
