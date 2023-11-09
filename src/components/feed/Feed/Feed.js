import React, { useEffect, useState } from "react";
import iconStar from "../../../assets/images/icons/icon-star.png";
import iconSave from "../../../assets/images/icons/icon-plus-feed.png";
import iconBook from "../../../assets/images/icons/icon-book.png";
import feeds from "../../../mocks/data-feeds";
import { useParams } from "react-router-dom";

export const Feed = () => {
  const { id } = useParams();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const foundFeed = feeds.find((item) => item.id === id);
    if (foundFeed) {
      setFeed(foundFeed);
    } else {
      console.log(`Feed with id ${id} not found.`);
    }
  }, [id, feeds]);

  return (
    <section className="feed">
      <div className="feed__wrapper">
        <div className="feed__wrapper--head">
          {feed.member_story && (
            <div className="member-only">
              <img src={iconStar} alt="member" /> <span>Member-only story</span>
            </div>
          )}
          <h1 className="feed__wrapper--head-title">{feed.title}</h1>
          {feed.member_story && <p>{feed.description}</p>}
          <div className="feed__wrapper--head-creator">
            <div className="avatar">
              <img src={feed.author?.avatar} alt={feed.author?.name} />
              {feed.published?.category && (
                <div className="category">
                  <img
                    src={feed.published.img_brand}
                    alt={feed.published.category}
                  />
                </div>
              )}
            </div>
            <div className="publication">
              <div className="publication--author">
                <span>{feed.author?.name}</span>
                <div className="icon">
                  {feed.author?.books.length > 0 && (
                    <img src={iconBook} alt="icon" />
                  )}
                </div>
                <span className="separation">.</span>
                <button>Follow</button>
              </div>
              <div className="publication--info">
                {feed.published?.category && (
                  <span>{`Published in ${feed.published.category}`} </span>
                )}
                {feed.published?.category && (
                  <span className="separation">.</span>
                )}
                <span>{feed.time_read} min read</span>
                <span className="separation">.</span>
                {feed.published?.category ? (
                  <span>{feed.date_feed}</span>
                ) : (
                  <span>5 days ago</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
