import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MYPET_LIST = "mypet/GET_MYPET_LIST";
// eslint-disable-next-line
const actions = createActions({
  // eslint-disable-next-line
  [GET_MYPET_LIST]: () => {},
});

/* 리듀서 */
const myPetReducer = handleActions(
  {
    [GET_MYPET_LIST]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default myPetReducer;
