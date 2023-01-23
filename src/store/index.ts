import { configureStore } from "@reduxjs/toolkit";
import PlaceReducer from "./reducers/placesSlice";

export const store = configureStore({
  reducer: {
    places: PlaceReducer
  },
});
