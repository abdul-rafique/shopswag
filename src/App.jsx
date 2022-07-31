import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Article from "./Routes/Article";
import Home from "./Routes/Home";
import Privacy from "./Routes/Privacy";
import Terms from "./Routes/Terms";
import NoMatch from "./Routes/NoMatch";

const Redirect = () => {
  return <Navigate to="home" replace={true} />;
};

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route index element={<Redirect />} />
        <Route path="home" element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
