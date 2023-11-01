import React from "react";

import { topics } from "../../../mocks/data-topics";

export const DiscoverTopics = () => {
  return (
    <section className="discover_topics">
      <h2>Discover more of what matters to you</h2>
      <article className="discover_topics__wrapper">
        {topics?.map((topic, index) => (
          <span key={index} className="topic">
            {topic}
          </span>
        ))}
      </article>
      <button>See more topics</button>
    </section>
  );
};
