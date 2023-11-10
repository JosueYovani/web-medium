import React from "react";

import { FeedItem } from "./FeedItem/FeedItem";

export const FeedsMediumList = ({ feeds }) => {
  return (
    <React.Fragment>
      {feeds?.map((feed, index) => {
        return <FeedItem key={index} feed={feed} />;
      })}
    </React.Fragment>
  );
};
