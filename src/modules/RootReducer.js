import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import boardingBookingReducer from "./BoardingBookingModule";
import reviewReducer from "./ReviewModule";
import memberReducer from "./MemberModule";
import beautyReducer from "./BeautyModule";
import communityReducer from "./CommunityModule";
import commentReducer from "./CommentModule";
import headlineReducer from "./HeadlineModule";
import boardReducer from "./BoardModule";
import beautyReservationReducer from "./BeautyReservationModule";
import beautyReviewReducer from "./BeautyReviewModule";
import beautyPriceReducer from "./BeautyPriceModule";
import myPetReducer from "./MyPetModule";
import viewActivityReducer from "./CommunityActivityModule";
import beautyReviewListReducer from "./BeautyReviewListModule";
import boardingBookingDetailReducer from "./BoardingBookingDetailModule";
import boardingBookingMypetReducer from "./BoardingBookingMypetModule";

const rootReducer = combineReducers({
  boardingBookingMypetReducer,
  boardingBookingDetailReducer,
  myPetReducer,
  memberReducer,
  reviewReducer,
  boardingReducer,
  boardingBookingReducer,
  beautyReducer,
  beautyReservationReducer,
  beautyReviewReducer,
  beautyReviewListReducer,
  beautyPriceReducer,
  communityReducer,
  commentReducer,
  headlineReducer,
  boardReducer,
  viewActivityReducer,
});

export default rootReducer;
