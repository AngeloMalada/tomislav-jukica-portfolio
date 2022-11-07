import { configureStore } from "@reduxjs/toolkit";
import cursorReducer from "./cursorSlice";

export default configureStore({
  reducer: {
    cursor: cursorReducer,
  },
});
