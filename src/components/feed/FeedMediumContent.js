import React, { useState } from "react";

import { ModalAside } from "../common";
import { FeedView } from "./FeedView/FeedView";
import { CommentsContent } from "./CommentsContent";
import { CreateComment } from "./CreateComment/CreateComment";

export const FeedMediumContent = ({ feed }) => {
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
      <FeedView feed={feedWithNumerComments} openModal={openModal} />
      <ModalAside
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Responses (${numberComments ? numberComments : 0})`}
      >
        <CreateComment postId={feed.id} />
        <CommentsContent
          postId={feed.id}
          setNumberComments={setNumberComments}
        />
      </ModalAside>
    </React.Fragment>
  );
};
