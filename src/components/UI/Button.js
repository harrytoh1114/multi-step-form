import React from "react";

import "./Button.css";

const Button = ({ type, style, children, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={`button ${style}`}>
      {children}
    </button>
  );
};

export default Button;
