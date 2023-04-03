import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";
import communityReducer from "./CommunityModule";

const rootReducer = combineReducers({
    memberReducer,
    reviewReducer,
    boardingReducer,
    beautyReducer,
    communityReducer
});

export default rootReducer;
