import React from "react";

import { TrendingTopic } from "../TrendingTopic/TrendingTopic";

import iconTrending from "../../../assets/images/icons/icon-trending.png";
import trendingsTopics from "../../../mocks/data-trending";

export const Trending = () => {
  return (
    <section className="trending">
      <div className="trending__wrapper">
        <article className="trending__wrapper--title">
          <img src={iconTrending} alt="icon trending" />
          <h2>Trending on Medium</h2>
        </article>
        <article className="trending__wrapper--body">
          {trendingsTopics?.map((trending, index) => {
            return <TrendingTopic key={index} trending={trending} />;
          })}
        </article>
      </div>
    </section>
  );
};
