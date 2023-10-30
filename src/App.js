import React from "react";
import { PageHome } from "./pages";
import { Header } from "./layouts";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <PageHome />
    </React.Fragment>
  );
};
