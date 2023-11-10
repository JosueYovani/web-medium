import React from "react";

export const Header = (props) => {
  const { children, scrolled } = props;

  return (
    <header className={`header ${scrolled ? "bg-secondary" : "bg-primary"}`}>
      <section className="header__wrapper ">{children}</section>
    </header>
  );
};
