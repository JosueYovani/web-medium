import React from "react";

import iconBold from "../../../assets/images/icons/icon-bold.png";

export const CreateComment = ({ postId }) => {
  return (
    <section className="create-comment">
      <div className="create-comment__wrapper">
        <div className="container">
          <div className="container-creator">
            <div className="container-creator--avatar"></div>
            <span>Gio</span>
          </div>
          <div className="container-form">
            <form action="">
              <textarea
                name=""
                id=""
                rows="4"
                placeholder="What are your thoughts?"
              ></textarea>
              <div className="form-controls">
                <div className="form-controls-decorations">
                  <button>
                    <img src={iconBold} alt="icon bold" />
                  </button>
                </div>
                <div className="form-controls-buttons">
                  <span>Cancel</span>
                  <button className="btn-secondary">Respond</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="check">
        <input type="checkbox" />
        <span>Also publish to my profile</span>
      </div>
    </section>
  );
};
