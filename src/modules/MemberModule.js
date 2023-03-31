import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBER     = 'member/GET_MEMBER';
export const POST_LOGIN     = 'member/POST_LOGIN';
export const POST_SIGNUP  = 'member/POST_SIGNUP';
// eslint-disable-next-line
const actions = createActions({
    // eslint-disable-next-line
    [GET_MEMBER]: () => {}, [POST_LOGIN]: () => {}, [POST_SIGNUP]: () => {}
});

/* 리듀서 */
const memberReducer = handleActions(
    {
        [GET_MEMBER]: (state, { payload }) => {
            
            return payload;
        },
        [POST_LOGIN]: (state, { payload }) => {
            
            return payload;
        },
        [POST_SIGNUP]: (state, { payload }) => {
            
            return payload;
        },

    },
    initialState
);

export default memberReducer;