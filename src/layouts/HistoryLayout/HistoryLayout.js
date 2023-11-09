import React from "react";
import { Outlet } from "react-router-dom";

import { Content, Header, Layout, Main } from "../../components/layouts";

const HistoryLayout = () => {
  return (
    <div className="history-layout">
      <Layout>
        <Header></Header>
        <Content>
          <Outlet />
        </Content>
        <Main></Main>
      </Layout>
    </div>
  );
};

export default HistoryLayout;
