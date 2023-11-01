import React from "react";
import {
  AsideHome,
  AsideNav,
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
          <AsideNav />
        </AsideHome>
      </MainHome>
    </React.Fragment>
  );
};

export default PageHome;
