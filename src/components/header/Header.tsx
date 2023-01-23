import { CgPlayListSearch } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setShowSearchBar } from "../../store/reducers/placesSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header-container">
      <CgPlayListSearch
        style={{
          fontSize: "3rem",
          verticalAlign: "middle",
          position: "absolute",
          left: "1rem",
          top: "10px",
        }}
        onClick={() => dispatch(setShowSearchBar(true))}
      ></CgPlayListSearch>
      <span>Bangladesh</span>
    </div>
  );
};

export default Header;
