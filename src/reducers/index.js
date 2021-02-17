import { combineReducers } from "redux";
import courseReducer from "./course.reducer";

const allReducers = combineReducers({
  courseReducer,
});

export default allReducers;
