import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { parseDateDAgo } from "../../../helpers/paredDate";
import { deleteFeedByIdWithApi } from "../../../services/deleteFeedByIdWithApi";

import commentsPost from "../../../mocks/response-comments-post.json";

import iconStar from "../../../assets/images/icons/icon-star.png";
import iconSave from "../../../assets/images/icons/icon-plus-feed.png";
import iconBook from "../../../assets/images/icons/icon-book.png";
import iconListen from "../../../assets/images/icons/icon-listen.png";
import iconShare from "../../../assets/images/icons/icon-share.png";
import iconClap from "../../../assets/images/icons/icon-clap.png";
import iconComment from "../../../assets/images/icons/icon-comment.png";
import iconDelete from "../../../assets/images/icons/trash-fill.svg";
import { ModalAside } from "../../common";
import { CommentItem } from "../CommentItem/CommentItem";

export const FeedItem = ({ feed }) => {
  const {
    member_story,
    title,
    published,
    description,
    author,
    time_read,
    date_feed,
    claps,
    comments,
    img_cover,
    content,
  } = feed;

  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteFeed = async () => {
    try {
      await deleteFeedByIdWithApi(feed.id);
      console.log("Feed eliminado exitosamente");
      navigate("/");
    } catch (error) {
      console.error("Error al eliminar el feed:", error.message);
    }
  };

  return (
    <section className="feed-item">
      <article className="feed__wrapper">
        <section className="feed-item__wrapper--head">
          {member_story && (
            <div className="member-only">
              <img src={iconStar} alt="member" /> <span>Member-only story</span>
            </div>
          )}
          <h1 className="feed-item__wrapper--head-title">{title}</h1>
          {member_story && <p>{description}</p>}
          <article className="feed-item__wrapper--head-creator">
            <div className="avatar">
              {author.avatar && <img src={author?.avatar} alt={author?.name} />}
              {published?.category && (
                <div className="category">
                  <img src={published.img_brand} alt={published.category} />
                </div>
              )}
            </div>
            <div className="publication">
              <div className="publication--author">
                <span>{author?.name}</span>
                <div className="icon">
                  {author?.books?.length > 0 && (
                    <img src={iconBook} alt="icon" />
                  )}
                </div>
                <span className="separation">.</span>
                <button>Follow</button>
              </div>
              <div className="publication--info">
                {published?.category && (
                  <span>{`Published in ${published.category}`} </span>
                )}
                {feed.published?.category && (
                  <span className="separation">.</span>
                )}
                <span>{time_read ? time_read : 8} min read</span>
                <span className="separation">.</span>
                {published?.category ? (
                  <span>{date_feed}</span>
                ) : (
                  <span>{parseDateDAgo(date_feed)}</span>
                )}
              </div>
            </div>
          </article>
          <article className="feed-item__wrapper--head-actions">
            <div className="publish">
              <div className="publish--group">
                <button onClick={() => openModal()}>
                  <img src={iconComment} alt="icon comment" />
                </button>
                <span>{comments ? comments : 99}</span>
              </div>
            </div>
            <div className="share">
              <button onClick={handleDeleteFeed}>
                <img src={iconDelete} alt="icon delete" />
              </button>

              <button>
                <img src={iconShare} alt="icon share" />
              </button>
            </div>
          </article>
        </section>
        <section className="feed-item__wrapper--body">
          <article className="feed-item__wrapper--body--cover">
            {img_cover && <img src={img_cover} alt={title} />}
          </article>
          <article className="feed-item__wrapper--body--content">
            <p>{content}</p>
          </article>
        </section>
      </article>
      <ModalAside
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`Responses (${comments ? comments : 0})`}
      >
        {commentsPost.map((comment) => {
          return <CommentItem key={comment._id} comment={comment} />;
        })}
      </ModalAside>
    </section>
  );
};
