import counterReducer from "./counter";
import stringConcater from "./stringConcater";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  counterReducer,
  stringConcater,
})

export default rootReducer