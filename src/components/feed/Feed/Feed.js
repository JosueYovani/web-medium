import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import feeds from "../../../mocks/data-feeds";

import iconStar from "../../../assets/images/icons/icon-star.png";
import iconSave from "../../../assets/images/icons/icon-plus-feed.png";
import iconBook from "../../../assets/images/icons/icon-book.png";
import iconListen from "../../../assets/images/icons/icon-listen.png";
import iconShare from "../../../assets/images/icons/icon-share.png";
import iconClap from "../../../assets/images/icons/icon-clap.png";
import iconComment from "../../../assets/images/icons/icon-comment.png";

export const Feed = () => {
  const { id } = useParams();
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const foundFeed = feeds.find((feed) => feed.id === id);
    if (foundFeed) {
      setFeed(foundFeed);
    } else {
      console.log(`Feed with id ${id} not found.`);
    }
  }, [id, feeds]);

  return (
    <section className="feed">
      <article className="feed__wrapper">
        <section className="feed__wrapper--head">
          {feed.member_story && (
            <div className="member-only">
              <img src={iconStar} alt="member" /> <span>Member-only story</span>
            </div>
          )}
          <h1 className="feed__wrapper--head-title">{feed.title}</h1>
          {feed.member_story && <p>{feed.description}</p>}
          <article className="feed__wrapper--head-creator">
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
          </article>
          <article className="feed__wrapper--head-actions">
            <div className="publish">
              <div className="publish--group space">
                <button>
                  <img src={iconClap} alt="icon clap" />
                </button>
                <span>{feed.claps}K</span>
              </div>
              <div className="publish--group">
                <button>
                  <img src={iconComment} alt="icon clap" />
                </button>
                <span>{feed.comments?.length}</span>
              </div>
            </div>
            <div className="share">
              <button className="space">
                <img src={iconSave} alt="icon save" />
              </button>
              <button className="space">
                <img src={iconListen} alt="icon listen" />
              </button>
              <button>
                <img src={iconShare} alt="icon share" />
              </button>
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};
