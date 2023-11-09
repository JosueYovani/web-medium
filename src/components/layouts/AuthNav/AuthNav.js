import React from "react";

import iconWrite from "../../../assets/images/icons/icon-write.png";

export const AuthNav = () => {
  return (
    <nav className="auth-nav">
      <div className="auth-nav__wrapper">
        <ul className="auth-nav__wrapper--menu">
          <li>
            <img src={iconWrite} alt="icon write" />
            <span>Write</span>
          </li>
          <li className="btn-secondary">Sign Up</li>
          <li>Sign In</li>
        </ul>
        <div className="auth-nav__wrapper--avatar"></div>
      </div>
    </nav>
  );
};
