import React from "react";

export const Content = ({ children }) => {
  return (
    <section className="content">
      <div className="content__wrapper">{children}</div>
    </section>
  );
};
