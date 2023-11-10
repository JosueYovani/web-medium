import React from "react";
import { Link } from "react-router-dom";

import minBrandLogo from "../../../assets/images/logos/mini-logo-medium.png";

export const MiniBrandLogo = () => {
  return (
    <div className="mini-brand-logo">
      <Link to="/">
        <img src={minBrandLogo} alt="brand-logo" />
      </Link>
      <span>Draft in Gio</span>
    </div>
  );
};
