import React from "react";
import { Link } from "react-router-dom";

export const TopNav = (props) => {
  const { scrolled } = props;

  return (
    <div className="top-nav">
      <span>Our story</span>
      <span>membership</span>
      <Link to="/new-history">
        <span className="active">Write</span>
      </Link>
      <span>Sign In</span>
      <button className={`${scrolled ? "btn-secondary" : "btn"}`}>
        Get started
      </button>
    </div>
  );
};
