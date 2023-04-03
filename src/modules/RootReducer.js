import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import boardingBookingReducer from "./BoardingBookingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";
import communityReducer from "./CommunityModule";

const rootReducer = combineReducers({
    memberReducer,
    reviewReducer,
    boardingReducer,
    boardingBookingReducer,
    beautyReducer,
    communityReducer
});

export default rootReducer;
