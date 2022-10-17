import React from "react";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/details";

import Home from "./pages/home/index";

function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>

      {/* <Route path="/admin" element={<DefaultLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/history" element={<History />} />
  </Route> */}
    </Routes>
  );
}

export default Router;
