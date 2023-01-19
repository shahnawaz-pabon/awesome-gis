import { CgPlayListSearch } from "react-icons/cg";

const Header = () => {
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
        onClick={() => console.log("Header clicked")}
      ></CgPlayListSearch>
      <span>Bangladesh</span>
    </div>
  );
};

export default Header;
