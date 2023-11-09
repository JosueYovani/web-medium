import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageFeed, PageHome, PageNewHistory } from "./pages";
import { FeedLayout, HomeLayout } from "./layouts";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<PageHome />} />
        </Route>
        <Route path="/feed" element={<FeedLayout />}>
          <Route path=":id" element={<PageFeed />} />
        </Route>
        <Route path="/new-history" element={<PageNewHistory />} />
      </Routes>
    </BrowserRouter>
  );
};
