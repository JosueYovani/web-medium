import React from "react";

export const NotResponseMsg = ({ code, msg }) => {
  return (
    <section className="not-response-msg">
      <div className="not-response-msg__wrapper">
        <h2 className="code">{code}</h2>
        <p className="msg">{msg}</p>
      </div>
    </section>
  );
};
