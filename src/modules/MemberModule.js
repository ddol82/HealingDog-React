import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBER = "member/GET_MEMBER";
export const GET_MYPET = "member/GET_MYPET";
export const POST_LOGIN = "member/POST_LOGIN";
export const POST_SIGNUP = "member/POST_SIGNUP";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_MEMBER]: () => {},
  // eslint-disable-next-line
  [GET_MYPET]: () => {},
  // eslint-disable-next-line
  [POST_LOGIN]: () => {},
  // eslint-disable-next-line
  [POST_SIGNUP]: () => {},
});

/* 리듀서 */
const memberReducer = handleActions(
  {
    [GET_MEMBER]: (state, { payload }) => payload,
    [GET_MYPET]: (state, { payload }) => payload,
    [POST_LOGIN]: (state, { payload }) => payload,
    [POST_SIGNUP]: (state, { payload }) => payload,
  },
  initialState
);

export default memberReducer;
