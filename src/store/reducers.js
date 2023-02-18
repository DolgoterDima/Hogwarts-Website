import { combineReducers } from "redux";
import { studentsReducer } from "./students";
export const rootReducer = combineReducers({
  students: studentsReducer,
});
