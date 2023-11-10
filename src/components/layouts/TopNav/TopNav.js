import React from "react";

export const TopNav = (props) => {
  const { scrolled } = props;

  return (
    <div className="top-nav">
      <span>Our story</span>
      <span>membership</span>
      <span>Write</span>
      <span>Sign In</span>
      <button className={`${scrolled ? "btn-secondary" : "btn"}`}>
        Get started
      </button>
    </div>
  );
};
