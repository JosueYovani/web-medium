import React from "react";
import {
  AsideHome,
  BrandLogo,
  Content,
  Header,
  Layout,
  Main,
  MainHome,
  TopNav,
} from "../../components/layouts";
import {
  DiscoverTopics,
  LinksNav,
  StayCurious,
  TrendingMedium,
} from "../../components/home";

const HomeLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <Layout>
        <Header>
          <BrandLogo />
          <TopNav />
        </Header>
        <Main>
          <StayCurious />
        </Main>
        <Content>
          <TrendingMedium />
          <MainHome>
            {children}
            <AsideHome>
              <DiscoverTopics />
              <LinksNav />
            </AsideHome>
          </MainHome>
        </Content>
      </Layout>
    </div>
  );
};

export default HomeLayout;
