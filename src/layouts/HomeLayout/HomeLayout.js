import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

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

const HomeLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 280;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-layout">
      <Layout>
        <Header scrolled={scrolled}>
          <BrandLogo />
          <TopNav />
        </Header>
        <Main>
          <StayCurious />
        </Main>
        <Content>
          <TrendingMedium />
          <MainHome>
            <Outlet />
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
