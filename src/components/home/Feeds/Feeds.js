import React from "react";

import { Feed } from "../Feed/Feed";
import feeds from "../../../mocks/data-feeds";

export const Feeds = () => {
  return (
    <section className="feeds">
      <article className="feeds__wrapper">
        {feeds?.map((feed, index) => {
          return <Feed key={index} feed={feed} />;
        })}
      </article>
    </section>
  );
};
