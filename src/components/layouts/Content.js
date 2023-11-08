import React from "react";

export const Content = ({ children }) => {
  return (
    <section className="content">
      <article className="content__wrapper">{children}</article>
    </section>
  );
};
