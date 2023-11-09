import React from "react";
import { Outlet } from "react-router-dom";

import { BrandLogo, Content, Header, Layout } from "../../components/layouts";

const FeedLayout = () => {
  return (
    <div className="feed-layout">
      <Layout>
        <Header>
          <BrandLogo />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default FeedLayout;
