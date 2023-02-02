import { configureStore } from "@reduxjs/toolkit";
import PlaceReducer from "./reducers/placesSlice";
import MapReducer from "./reducers/mapSlice";

export const store = configureStore({
  reducer: {
    places: PlaceReducer,
    map: MapReducer,
  },
});
