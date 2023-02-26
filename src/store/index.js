import { configureStore } from "@reduxjs/toolkit";
import studentsSlice from "./studentsSlice";
import devToolsEnhancer from "remote-redux-devtools";

export default configureStore({
  reducer: {
    students: studentsSlice,
    devTools: false,
    enhancers: [devToolsEnhancer({ realtime: true })],
  },
});
