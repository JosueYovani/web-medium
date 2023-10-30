import React from "react";
import {
  AsideHome,
  Description,
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
          <div>topics</div>
          <footer>contact</footer>
        </AsideHome>
      </MainHome>
    </React.Fragment>
  );
};

export default PageHome;
