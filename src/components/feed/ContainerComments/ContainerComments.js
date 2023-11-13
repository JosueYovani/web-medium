import React, { useEffect, useState } from "react";

import { getCommentsByIdWithApi } from "../../../services/getCommentsByIdWithApi";
import { NotResponseMsg } from "../../common";
import { CommentList } from "../CommentList/CommentList";

export const ContainerComments = ({ postId, setNumberComments }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchCommentsByPostId = async () => {
      try {
        const comments = await getCommentsByIdWithApi(postId);
        setComments(comments);
        setNumberComments(comments?.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCommentsByPostId();
  }, [comments]);

  return (
    <React.Fragment>
      {comments.length === 0 ? (
        <NotResponseMsg
          msg="There are currently no responses for this story. Be the first to
        respond."
        />
      ) : (
        <CommentList comments={comments} />
      )}
    </React.Fragment>
  );
};
