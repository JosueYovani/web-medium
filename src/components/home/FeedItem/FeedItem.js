import React from "react";
import iconStar from "../../../assets/images/icons/icon-star.png";
import iconSave from "../../../assets/images/icons/icon-plus-feed.png";
import iconBook from "../../../assets/images/icons/icon-book.png";
import { Link } from "react-router-dom";

export const FeedItem = ({ feed }) => {
  const {
    id,
    img_cover,
    title,
    description,
    date_feed,
    author,
    published,
    topics,
    time_read,
    member_story,
  } = feed;

  return (
    <div className="feed-item">
      <div className="feed-item__wrapper">
        <div className="feed-item__wrapper--data">
          <div className="creator">
            <img
              src={published?.category ? published.img_brand : author.avatar}
              alt={author.name}
            />
            <p>{author.name}</p>
            {author.books.length > 0 && <img src={iconBook} alt="icon" />}
            <p>{published?.category && `in ${published.category}`}</p>
          </div>
          <div className="story">
            <Link to={`/feed/${id}`}>
              <p className="story--title">{title}</p>
            </Link>
            <p className="story--description">{description}</p>
          </div>
          <div className="summary">
            <div className="summary-info">
              <p className="date">{`${date_feed} | ${time_read} min read`}</p>
              {topics.length > 0 && <span className="topic">{topics[0]}</span>}
              {member_story && <img src={iconStar} alt="member" />}
            </div>
            <div className="summary-save">
              <img src={iconSave} alt="icon" />
            </div>
          </div>
        </div>
        <div className="feed-item__wrapper--cover">
          <img src={img_cover} alt="" />
        </div>
      </div>
    </div>
  );
};
