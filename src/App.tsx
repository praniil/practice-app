// App.js
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Counter from "./Components/Counter";
// import ShowCounter from "./Components/ShowCounter";
import SearchFilter from "./Components/SearchFilter";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <Counter>
    //           <ShowCounter />
    //         </Counter>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    <SearchFilter />
  );
}

export default App;
