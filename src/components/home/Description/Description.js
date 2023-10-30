import React from "react";

import imgCover from "../../../assets/images/banner.svg";

export const Description = () => {
  return (
    <section className="description">
      <div className="description__wrapper">
        <article className="description__wrapper-story">
          <h2>Stay curious.</h2>
          <p>
            Discover stories, thinking, and expertise <br />
            from writers on any topic.
          </p>
          <button className="btn">Start reading</button>
        </article>
        <article className="description__wrapper-cover">
          <img src={imgCover} alt="image cover description" />
        </article>
      </div>
    </section>
  );
};
