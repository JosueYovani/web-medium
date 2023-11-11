import React from "react";
import { Outlet } from "react-router-dom";

import {
  AuthNav,
  BrandLogo,
  Content,
  Header,
  Layout,
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
          <AuthNav />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default FeedLayout;
