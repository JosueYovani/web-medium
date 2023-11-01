import React from "react";

export const Header = ({ children }) => {
  return (
    <header className="header">
      <section className="header__wrapper">{children}</section>
    </header>
  );
};
