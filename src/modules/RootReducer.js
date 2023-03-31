import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";


const rootReducer = combineReducers({
    memberReducer,
    reviewReducer,
    boardingReducer
});

export default rootReducer;