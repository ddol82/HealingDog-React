import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import boardingBookingReducer from "./BoardingBookingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";
import communityReducer from "./CommunityModule";
import boardingBookingDetailReducer from "./BoardingBookingDetailModule";
import boardingBookingMypetReducer from "./BoardingBookingMypetModule";

const rootReducer = combineReducers({
    boardingBookingMypetReducer,
    boardingBookingDetailReducer,
    memberReducer,
    reviewReducer,
    boardingReducer,
    boardingBookingReducer,
    beautyReducer,
    communityReducer
});

export default rootReducer;
