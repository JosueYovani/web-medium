import React, { useState } from "react";

import { topics } from "../../../mocks/data-topics";

export const FormNewFeed = () => {
  const [newFeed, setNewFeed] = useState({
    img_cover: "",
    title: "",
    description: "",
    content: "",
    date_feed: "",
    author: "",
    topics: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFeed({ ...newFeed, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nuevo Feed:", newFeed);
  };

  return (
    <section className="form-new-feed">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={newFeed.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="title"
          />
          <span>.</span>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            value={newFeed.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <span>.</span>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="content"
            value={newFeed.content}
            onChange={handleChange}
            placeholder="Content"
            required
          />
          <span>.</span>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date_feed"
            value={newFeed.date_feed}
            onChange={handleChange}
            placeholder="Date"
          />
          <span>.</span>
        </div>
        <div className="form-group">
          <select
            name="topics"
            value={newFeed.topics}
            onChange={handleChange}
            placeholder="post"
          >
            <option value="" disabled>
              Select a topic
            </option>
            {topics?.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <span>.</span>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="img_cover"
            value={newFeed.img_cover}
            onChange={handleChange}
            placeholder="Image"
          />

          <span>.</span>
        </div>
        <button type="submit">Publicar</button>
      </form>
    </section>
  );
};
