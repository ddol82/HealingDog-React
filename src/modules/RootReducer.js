import { combineReducers } from "redux";
import boardingReducer from "./BoardingModule";
import reviewReducer from "./ReviewModule";


const rootReducer = combineReducers({
    reviewReducer,
    boardingReducer
});

export default rootReducer;