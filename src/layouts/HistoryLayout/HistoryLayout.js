import React, { createContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import {
  Content,
  Header,
  Layout,
  MiniBrandLogo,
  PublishNav,
} from "../../components/layouts";
import { postFeedWithAPi } from "../../services/postFeedWithAPi";

export const HistoryContext = createContext();

const HistoryLayout = () => {
  const navigate = useNavigate();

  const [newFeed, setNewFeed] = useState({
    img_cover: "",
    title: "",
    description: "",
    content: "",
    date_feed: "",
    author: "",
    topics: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFeed({ ...newFeed, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        title: newFeed.title,
        author: "654e9c51d22bc01813d3b869",
        content: newFeed.content,
        tags: newFeed.topics,
      };
      await postFeedWithAPi(data);
      console.log("Nuevo Feed enviado exitosamente");
      navigate("/");
    } catch (error) {
      console.error("Error al enviar el nuevo Feed:", error);
    }
  };

  return (
    <HistoryContext.Provider value={{ newFeed, handleSubmit, handleChange }}>
      <div className="history-layout">
        <Layout>
          <Header>
            <MiniBrandLogo />
            <PublishNav />
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </div>
    </HistoryContext.Provider>
  );
};

export default HistoryLayout;
