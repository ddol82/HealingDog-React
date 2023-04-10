import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";
import categoryReducer from "./CommunityModule";
import commentReducer from "./CommentModule";
import headlineReducer from "./HeadlineModule";
import boardReducer from "./BoardModule";
import beautyReservationReducer from "./BeautyReservationModule";
import beautyReviewReducer from "./BeautyReviewModule";
import viewActivityReducer from "./CommunityActivityModule";

const rootReducer = combineReducers({
  memberReducer,
  reviewReducer,
  boardingReducer,
  beautyReducer,
  beautyReservationReducer,
  beautyReviewReducer,
  categoryReducer,
  commentReducer,
  headlineReducer,
  boardReducer,
  viewActivityReducer
});

export default rootReducer;
