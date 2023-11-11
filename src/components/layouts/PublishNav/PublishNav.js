import React, { useContext } from "react";
import { HistoryContext } from "../../../layouts/HistoryLayout/HistoryLayout";

import iconMore from "../../../assets/images/icons/icon-more.png";
import iconBell from "../../../assets/images/icons/icon-bell.png";

export const PublishNav = () => {
  const { handleSubmit } = useContext(HistoryContext);

  return (
    <div className="publish-nav">
      <div className="publish-nav__wrapper">
        <button onClick={handleSubmit}>Publish</button>
        <ul className="publish-nav__wrapper--menu">
          <li>
            <img src={iconMore} alt="icon more" />
          </li>
          <li>
            <img src={iconBell} alt="icon bell" />
          </li>
        </ul>
        <div className="publish-nav__wrapper--avatar"></div>
      </div>
    </div>
  );
};
