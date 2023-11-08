import React from "react";

export const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="main__wrapper">{children}</div>
    </main>
  );
};
