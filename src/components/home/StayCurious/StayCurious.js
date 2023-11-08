import React from "react";
import imgCover from "../../../assets/images/banner.svg";

export const StayCurious = () => {
  return (
    <article className="stay-curious">
      <section className="stay-curious__wrapper">
        <article className="stay-curious__wrapper--story">
          <h2>Stay curious.</h2>
          <p>
            Discover stories, thinking, and expertise <br />
            from writers on any topic.
          </p>
          <button className="btn">Start reading</button>
        </article>
        <article className="stay-curious__wrapper--cover">
          <img src={imgCover} alt="image cover stay-curious" />
        </article>
      </section>
    </article>
  );
};
