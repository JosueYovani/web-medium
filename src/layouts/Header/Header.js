import React from "react";

import brandLogo from "../../assets/images/logos/logo-medium.png";

export const Header = () => {
  return (
    <header>
      <section className="top-bar">
        <div className="top-bar--logo">
          <img src={brandLogo} alt="brand-logo" />
        </div>
        <div className="top-bar--nav">
          <span>Our story</span>
          <span>membership</span>
          <span>Write</span>
          <span>Sign In</span>
          <button className="btn">Get started</button>
        </div>
      </section>
    </header>
  );
};
