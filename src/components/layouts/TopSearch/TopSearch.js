import React from "react";

import iconSearch from "../../../assets/images/icons/icon-search.png";

export const TopSearch = () => {
  return (
    <div className="top-search">
      <div className="top-search--icon">
        <img src={iconSearch} alt="icon serch" />
      </div>
      <div className="top-search--input">
        <input placeholder="Search" />
      </div>
    </div>
  );
};
