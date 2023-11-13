import React, { useRef } from "react";

import { postCommentByPostIdWithApi } from "../../../services/postCommentByPostIdWithApi";
import iconBold from "../../../assets/images/icons/icon-bold.png";

export const CreateComment = ({ postId }) => {
  const txtContentRef = useRef(null);

  const handleSubmitNewComment = async (event) => {
    event.preventDefault();
    try {
      if (txtContentRef.current) {
        const data = {
          author: "654e9c51d22bc01813d3b869",
          content: txtContentRef.current.value,
        };
        await postCommentByPostIdWithApi(postId, data);
        console.log("Nuevo comentario enviado exitosamente");
        txtContentRef.current.value = "";
      }
    } catch (error) {
      console.error("Error al enviar el nuevo Feed:", error);
    }
  };

  return (
    <section className="create-comment">
      <div className="create-comment__wrapper">
        <div className="container">
          <div className="container-creator">
            <div className="container-creator--avatar"></div>
            <span>Gio</span>
          </div>
          <div className="container-form">
            <form onSubmit={handleSubmitNewComment}>
              <textarea
                ref={txtContentRef}
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
                  <button type="submit" className="btn-secondary">
                    Respond
                  </button>
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
