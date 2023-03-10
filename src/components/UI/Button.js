import React from "react";

import "./Button.css";

const Button = ({ type, styles, style, disabled, children, onClick }) => {
  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
      className={`button ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
