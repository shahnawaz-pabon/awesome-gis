import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../constants/places";

const initialState = {
  places: data,
};

export const placesSlice = createSlice({
  name: "placesState",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const { setPlaces } = placesSlice.actions;

export default placesSlice.reducer;
