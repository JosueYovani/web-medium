import React, { useState } from "react";

import { ModalAside } from "../../common";
import { FeedItem } from "../FeedItem/FeedItem";
import { CommentList } from "../CommentList/CommentList";

export const ContainerMedium = ({ feed }) => {
  const [comments, setComments] = useState(0);
  const [isModalOpen, setModalOpen] = useState(true);

  const feedWithNumerComments = { ...feed, comments: comments };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <FeedItem feed={feedWithNumerComments} openModal={openModal} />
      <ModalAside
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Responses (${comments ? comments : 0})`}
      >
        <CommentList setComments={setComments} />
      </ModalAside>
    </React.Fragment>
  );
};
