import React from "react";
import { TrendingItem } from "../TrendingItem/TrendingItem";
import iconTrending from "../../../assets/images/icons/icon-trending.png";
import trendingsTopics from "../../../mocks/data-trending";

export const TrendingMedium = () => {
  return (
    <section className="trending-medium">
      <article className="trending-medium--title">
        <img src={iconTrending} alt="icon trending" />
        <h2>Trending on Medium</h2>
      </article>
      <article className="trending-medium--list-topics">
        {trendingsTopics?.map((trending, index) => {
          return <TrendingItem key={index} trending={trending} />;
        })}
      </article>
    </section>
  );
};
