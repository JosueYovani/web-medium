import React from "react";

import { links } from "../../../mocks/data-links";

export const AsideNav = () => {
  return (
    <section className="aside-nav">
      <article className="aside-nav__wrapper">
        {links?.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </article>
    </section>
  );
};
