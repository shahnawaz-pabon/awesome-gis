import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { SidebarData } from "./SidebarData";

const Sidebar = ({ displaySidebar, showNav }: any) => {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();

  return (
    <div className={`l-navbar${showNav ? " show" : ""}`}>
      <nav className="nav">
        <div>
          <Link
            to="/awesome-gis"
            className="nav_logo"
            onClick={() => setActiveItem(0)}
          >
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="nav-logo-icon"
            />{" "}
            <span className="nav-logo-name">Awesome GIS</span>
          </Link>

          <div className="nav_list">
            {SidebarData &&
              SidebarData.map((itemData, index) => (
                <Link
                  key={index}
                  onClick={() => setActiveItem(itemData.id)}
                  className={
                    itemData.id === activeItem ? "nav_link active" : "nav_link"
                  }
                  to={itemData.path}
                >
                  {itemData.icon}
                  <span className="nav_name">{itemData.name}</span>
                </Link>
              ))}
          </div>
        </div>
        {/* <a href="" target="_blank" className="nav-link">
          <i className="bi bi-box-arrow-left nav-icon" />
          <span className="nav-name">SignOut</span>
        </a> */}
      </nav>
    </div>
  );
};

export default Sidebar;
