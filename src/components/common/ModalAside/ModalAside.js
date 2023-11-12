import React from "react";

export const ModalAside = ({ isOpen, onClose, title, children }) => {
  const closeModal = () => {
    onClose && onClose();
  };

  return (
    <section className={`modal-aside ${isOpen ? "open" : ""}`}>
      <div className="modal-aside-content">
        <div className="modal-aside-content--head">
          <div className="title">{title}</div>
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-aside-content--body">{children}</div>
      </div>
    </section>
  );
};
