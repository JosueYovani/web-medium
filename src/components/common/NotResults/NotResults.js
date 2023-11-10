import React from "react";
import notFoundCover from "../../../assets/images/not-found.png";

export const NotResults = () => {
  return (
    <div className="not-results">
      <div className="not-results__wrapper">
        <div className="not-results__wrapper--cover">
          <img src={notFoundCover} alt="not found image" />
        </div>
        <div className="not-results__wrapper--message">
          <h2>No se encontraron resultados</h2>
          <p>Lo sentimos, no hay resultados para mostrar.</p>
        </div>
      </div>
    </div>
  );
};
