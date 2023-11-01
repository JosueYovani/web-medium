import React from "react";
import {
  AsideHome,
  BrandLogo,
  Content,
  Header,
  Layout,
  MainHome,
  TopNav,
} from "../../layouts";
import {
  DiscoverTopics,
  FeedsMedium,
  LinksNav,
  StayCurious,
  TrendingMedium,
} from "../../components/home";

const PageHome = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header>
          <BrandLogo />
          <TopNav />
        </Header>
        <StayCurious />
        <Content>
          <TrendingMedium />
          <MainHome>
            <FeedsMedium />
            <AsideHome>
              <DiscoverTopics />
              <LinksNav />
            </AsideHome>
          </MainHome>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default PageHome;
