import React from "react";
import {
  AsideHome,
  Description,
  DiscoverTopics,
  Feeds,
  MainHome,
  Trending,
} from "../../components/home";

const PageHome = () => {
  return (
    <React.Fragment>
      <Description />
      <Trending />
      <MainHome>
        <Feeds />
        <AsideHome>
          <DiscoverTopics />
        </AsideHome>
      </MainHome>
    </React.Fragment>
  );
};

export default PageHome;
