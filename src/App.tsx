import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BasicMap } from "./components/map/BasicMap";
import Header from "./components/header/Header";
import { PlaceSearch } from "./components/place/PlaceSearch";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Portal = React.lazy(() => import("./layouts/portal/Portal"));

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <PlaceSearch />
        <BasicMap />
      </main>
    </>
  );
}

export default App;
