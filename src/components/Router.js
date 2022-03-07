import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";

const Router = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/airbnb-experiences-react" element={<App />} />
  </Routes>
);

export default Router;
