import React from "react";

export const AsideHome = ({ children }) => {
  return (
    <aside className="aside-home">
      <div className="aside-home__wrapper">{children}</div>
    </aside>
  );
};
