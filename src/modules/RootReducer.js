import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import communityReducer from "./CommunityModule";

const rootReducer = combineReducers({
    memberReducer,
    reviewReducer,
    boardingReducer,
    communityReducer
});

export default rootReducer;