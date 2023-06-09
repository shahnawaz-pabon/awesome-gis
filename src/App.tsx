import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BasicMap } from "./components/map/BasicMap";
import Header from "./components/header/Header";
import { PlaceSearch } from "./components/place/PlaceSearch";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { SidebarData } from "./components/sidebar/SidebarData";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={`body-area${showNav ? " body-pd" : ""}`}>
      <NavigationBar showNav={showNav} setShowNav={setShowNav} />
      <Sidebar showNav={showNav} />
      <Routes>
        <Route path="/awesome-gis" element={<BasicMap />} />
        {/* {SidebarData &&
          SidebarData.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<DynamicItem page={item.name} />}
            />
          ))} */}
      </Routes>
    </div>
    // <>
    //   <nav>
    //     <Header />
    //   </nav>
    //   <main>
    //     <PlaceSearch />
    //     <BasicMap />
    //   </main>
    // </>
  );
}

export default App;
