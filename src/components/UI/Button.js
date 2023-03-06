import React from "react";

import "./Button.css";

const Button = ({ type, styles, children, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={`button ${styles}`}>
      {children}
    </button>
  );
};

export default Button;
