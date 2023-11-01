import React from "react";

export const TrendingItem = ({ trending }) => {
  const { top_topic, title_topic, date_topic, time_read, category, author } =
    trending;

  return (
    <section className="trending-item">
      <article className="trending-item__wrapper">
        <div className="trending-item__wrapper--number">
          <span>{top_topic}</span>
        </div>
        <div className="trending-item__wrapper--info">
          <div className="author">
            <img src={author.avatar} alt={author.name} />
            <p>
              {author.name} {category && `in ${category}`}
            </p>
          </div>
          <p className="title">{title_topic}</p>
          <p className="date">{`${date_topic} | ${time_read} min read`}</p>
        </div>
      </article>
    </section>
  );
};
