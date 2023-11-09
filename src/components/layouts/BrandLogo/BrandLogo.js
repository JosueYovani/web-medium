import React from "react";
import brandLogo from "../../../assets/images/logos/logo-medium.png";
import { Link } from "react-router-dom";

export const BrandLogo = () => {
  return (
    <div className="brand-logo">
      <Link to="/">
        <img src={brandLogo} alt="brand-logo" />
      </Link>
    </div>
  );
};
