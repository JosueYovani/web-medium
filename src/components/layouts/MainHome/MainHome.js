import React from "react";

export const MainHome = ({ children }) => {
  return (
    <section className="main-home">
      <article className="main-home__wrapper">{children}</article>
    </section>
  );
};
