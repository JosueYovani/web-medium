import React from "react";

import { parseDateDAgo } from "../../../helpers/paredDate";
import iconShare from "../../../assets/images/icons/icon-more.png";

export const CommentItem = ({ comment }) => {
  const { author, content, createdAt } = comment;

  return (
    <section className="comment-item">
      <article className="comment-item__wrapper">
        <section className="comment-item__wrapper--creator">
          <article className="author">
            <div className="author-avatar">
              {author?.avatar && <img src={author?.avatar} alt={author.name} />}
            </div>
            <div className="author-info">
              <span className="author-info-name">{author.name}</span>
              <span className="author-info-date">{`about ${parseDateDAgo(
                createdAt
              )}`}</span>
            </div>
          </article>
          <article className="icon">
            <img src={iconShare} alt="icon" />
          </article>
        </section>
        <section className="comment-item__wrapper--comment">
          <span>{content}</span>
        </section>
      </article>
    </section>
  );
};
