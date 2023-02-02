import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zoomIn: 0,
  zoomOut: 0,
};

export const mapSlice = createSlice({
  name: "mapState",
  initialState,
  reducers: {
    setZoomIn: (state, action) => {
      state.zoomIn = state.zoomIn + 1;
    },
    setZoomOut: (state, action) => {
      state.zoomOut = state.zoomOut - 1;
    },
  },
});

export const { setZoomIn, setZoomOut } = mapSlice.actions;

export default mapSlice.reducer;
