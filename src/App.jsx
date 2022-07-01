import React from "react";

import { Routes, Route } from "react-router-dom";
import Head from "./Components/Head";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Head />} />
      </Routes>
    </div>
  );
}

export default App;
