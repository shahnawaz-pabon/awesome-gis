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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        {/* <React.Suspense fallback={<ProgressBar />}> */}
        <Routes>
          <Route
            path="/portal"
            // name="Portal"
            element={<Portal />}
          />
        </Routes>
        {/* </React.Suspense> */}
      </BrowserRouter>
      {/* <nav>
        <Header />
      </nav>
      <main>
        <PlaceSearch />
        <BasicMap />
      </main> */}
    </>
  );
}

export default App;
