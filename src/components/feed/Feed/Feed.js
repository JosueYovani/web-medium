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
          <h1 className="feed__wrapper--head-title">{feed.title}</h1>
          <div className="feed__wrapper--head-creator">
            <div className="avatar">
              {feed.published?.category ? (
                <img
                  src={feed.published.img_brand}
                  alt={feed.published.category}
                />
              ) : (
                <img src={feed.author?.avatar} alt={feed.author?.name} />
              )}
            </div>
            <p>{feed.author?.name}</p>
            {feed.author?.books.length > 0 && (
              <img className="icon" src={iconBook} alt="icon" />
            )}
            <p>{feed.published?.category && `in ${feed.published.category}`}</p>
            <p>{feed.time_read} min read</p>
          </div>
        </div>
      </div>
    </section>
  );
};
