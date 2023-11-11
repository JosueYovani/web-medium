import React from "react";

export const DiscoverTopicItem = (props) => {
  const { topic } = props;

  return (
    <div className="discover-topic-item">
      <span className="topic">{topic}</span>
    </div>
  );
};
