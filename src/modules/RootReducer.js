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
import myPetReducer from "./MyPetModule";
import viewActivityReducer from "./CommunityActivityModule";
import beautyReviewListReducer from "./BeautyReviewListModule";
import boardingBookingDetailReducer from "./BoardingBookingDetailModule";
import boardingBookingMypetReducer from "./BoardingBookingMypetModule";
import boardingReviewReducer from "./BoardingReviewModule";


const rootReducer = combineReducers({
  boardingBookingMypetReducer,
  boardingBookingDetailReducer,
  myPetReducer,
  memberReducer,
  reviewReducer,
  boardingReducer,
  boardingBookingReducer,
  boardingReviewReducer,
  beautyReducer,
  beautyReservationReducer,
  beautyReviewReducer,
  beautyReviewListReducer,
  communityReducer,
  commentReducer,
  headlineReducer,
  boardReducer,
  viewActivityReducer
});

export default rootReducer;
