import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";

const rootReducer = combineReducers({
  memberReducer,
  reviewReducer,
  boardingReducer,
  beautyReducer,
});

export default rootReducer;
