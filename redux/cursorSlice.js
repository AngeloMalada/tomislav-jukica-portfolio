import { createSlice } from "@reduxjs/toolkit";

const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    height: "50px",
    width: "50px",
    backgroundColor: "rgba( 255, 255, 255, 0.25 )",
    halfWidth: 25,
    blend: "normal",
  },
  reducers: {
    hovered: (state) => {
      state.backgroundColor = "rgba( 21, 21, 21, 0.2 )";
      state.width = "100px";
      state.height = "100px";
      state.halfWidth = 50;
      state.blend = "difference";
    },
    unhovered: (state) => {
      state.backgroundColor = "rgba( 255, 255, 255, 0.25 )";
      state.width = "50px";
      state.height = "50px";
      state.halfWidth = 25;
      state.blend = "normal";
    },
  },
});

export const { hovered, unhovered } = cursorSlice.actions;
export default cursorSlice.reducer;
