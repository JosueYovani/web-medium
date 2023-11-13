import React, { useState } from "react";

import { ModalAside } from "../../common";
import { FeedItem } from "../FeedItem/FeedItem";

import { ContainerComments } from "../ContainerComments/ContainerComments";
import { CreateComment } from "../CreateComment/CreateComment";

export const ContainerMedium = ({ feed }) => {
  const [numberComments, setNumberComments] = useState([]);
  const [isModalOpen, setModalOpen] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  console.log(feed);

  const feedWithNumerComments = { ...feed, comments: numberComments };

  return (
    <React.Fragment>
      <FeedItem feed={feedWithNumerComments} openModal={openModal} />
      <ModalAside
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Responses (${numberComments ? numberComments : 0})`}
      >
        <CreateComment postId={feed.id} />
        <ContainerComments
          postId={feed.id}
          setNumberComments={setNumberComments}
        />
      </ModalAside>
    </React.Fragment>
  );
};
