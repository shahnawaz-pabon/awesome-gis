import { useDispatch, useSelector } from "react-redux";
import {
  setShowSearchBar,
  setSelectedPlace,
} from "../../store/reducers/placesSlice";
import { Place } from "../../constants/models";
import { BiArrowBack } from "react-icons/bi";

export const PlaceSearch = () => {
  const { places, showSearchBar } = useSelector((state: any) => state.places);
  const dispatch = useDispatch();

  return (
    <div
      className={`search-place-container search-place-container-${
        showSearchBar && "active"
      }`}
    >
      <div className="search-place-header">
        <span
          className="search-place-header-close"
          role="button"
          onClick={() => dispatch(setShowSearchBar(false))}
        >
          <BiArrowBack />
        </span>
        <span className="search-place-header-title">Search</span>
      </div>
      <div className="search-place-list">
        {places.map((place: Place) => (
          <div
            key={place.title}
            className="search-place-list-item"
            style={{ backgroundImage: `url(${place.picture})` }}
            onClick={() => dispatch(setSelectedPlace(place))}
          ></div>
        ))}
      </div>
    </div>
  );
};
