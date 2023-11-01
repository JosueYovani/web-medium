import React from "react";
import { FeedItem } from "../FeedItem/FeedItem";
import feeds from "../../../mocks/data-feeds";

export const FeedsMedium = () => {
  return (
    <section className="feeds-medium">
      {feeds?.map((feed, index) => {
        return <FeedItem key={index} feed={feed} />;
      })}
    </section>
  );
};
