import React from "react";
import { Outlet } from "react-router-dom";

import {
  BrandLogo,
  Content,
  Header,
  Layout,
  TopNav,
  TopSearch,
} from "../../components/layouts";

const FeedLayout = () => {
  return (
    <div className="feed-layout">
      <Layout>
        <Header>
          <section className="section-left">
            <BrandLogo />
            <TopSearch />
          </section>

          <TopNav />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default FeedLayout;
