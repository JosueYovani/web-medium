import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageHome } from "./pages";
import { HomeLayout } from "./layouts";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<PageHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
