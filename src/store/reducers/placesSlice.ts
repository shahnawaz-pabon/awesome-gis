import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../constants/places";

const initialState = {
  places: data,
  showSearchBar: false,
  selectedPlace: {},
};

export const placesSlice = createSlice({
  name: "placesState",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
    setShowSearchBar: (state, action) => {
      state.showSearchBar = action.payload;
    },
    setSelectedPlace: (state, action) => {
      state.selectedPlace = action.payload;
    },
  },
});

export const { setPlaces, setShowSearchBar, setSelectedPlace } =
  placesSlice.actions;

export default placesSlice.reducer;
