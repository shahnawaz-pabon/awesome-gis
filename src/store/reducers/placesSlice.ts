import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../constants/places";

const initialState = {
  places: data,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export default placesSlice.reducer;
