import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";
import categoryReducer from "./CommunityModule";
import headlineReducer from "./HeadlineModule";
import boardReducer from "./BoardModule";
import beautyReservationReducer from "./BeautyReservationModule";

const rootReducer = combineReducers({
    memberReducer,
    reviewReducer,
    boardingReducer,
    beautyReducer,
    beautyReservationReducer,
    categoryReducer,
    headlineReducer,
    boardReducer
});

export default rootReducer;
