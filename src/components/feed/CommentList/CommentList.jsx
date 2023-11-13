import React from "react";

import { CommentItem } from "../CommentItem/CommentItem";

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0)
    return (
      <div className="no-response">
        There are currently no responses for this story. Be the first to
        respond.
      </div>
    );

  return (
    <section className="comment-list">
      <article className="comment-list__wrapper">
        <div className="comments-select">
          <h3>MOST RECENT</h3>
          <select name="" id=""></select>
        </div>
        <div className="comments-body">
          {comments?.map((comment) => {
            return <CommentItem key={comment._id} comment={comment} />;
          })}
        </div>
      </article>
    </section>
  );
};
