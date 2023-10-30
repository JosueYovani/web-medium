import React from "react";

export const TrendingTopic = ({ trending }) => {
  const { top_topic, title_topic, date_topic, time_read, category, author } =
    trending;

  return (
    <section className="trending-topic">
      <article className="trending-topic__wrapper">
        <div className="trending-topic__wrapper--number">
          <span>{top_topic}</span>
        </div>
        <div className="trending-topic__wrapper--info">
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
