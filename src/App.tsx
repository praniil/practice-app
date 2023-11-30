import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./Components/MyComponent";
import Context from "./Components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowCounter from "./Components/ShowCounter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Context>
                  <MyComponent />
                </Context>
                <Counter>
                  <ShowCounter/>
                </Counter>
              </>
            }
          />
          <Route
            path="/Counter"
            element={
              <Counter>
                {" "}
                <ShowCounter />{" "}
              </Counter>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
