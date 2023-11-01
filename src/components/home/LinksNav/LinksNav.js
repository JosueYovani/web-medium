import React from "react";

import { links } from "../../../mocks/data-links";

export const LinksNav = () => {
  return (
    <section className="links-nav">
      <article className="links-nav__wrapper">
        {links?.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </article>
    </section>
  );
};
