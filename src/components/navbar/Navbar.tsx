import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faList } from "@fortawesome/free-solid-svg-icons";

export const NavigationBar = ({ showNav, setShowNav }: any) => {
  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`header${showNav ? " body-pd" : ""}`}>
      <div className="header-toggle">
        {showNav ? (
          <FontAwesomeIcon
            style={{ marginLeft: "15px" }}
            icon={faTimes}
            onClick={handleClick}
          />
        ) : (
          <FontAwesomeIcon icon={faList} onClick={handleClick} />
        )}
      </div>
      <div className="header-img">
        <img
          src="https://avatars.githubusercontent.com/u/10698930?v=4"
          alt="Pabon"
        />
      </div>
    </header>
  );
};
