import React from "react";

export const CreateNewForm = ({ newFeed, topics, handleChange }) => {
  return (
    <section className="create-new-form">
      <form>
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
          <textarea
            type="text"
            name="content"
            value={newFeed.content}
            onChange={handleChange}
            placeholder="Tell your story..."
            required
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
              Topic for your story
            </option>
            {topics?.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          <span>.</span>
        </div>
      </form>
    </section>
  );
};
