import React from "react";

import "./Form.css";

const Form = ({ children, onSubmit, title, description }) => {
  return (
    <form className="form-control" onSubmit={onSubmit}>
      <div
        className="form-control-wrapper"
      >
        <div className="form-header">
          <h2 className="form-title">{title}</h2>
          <p className="form-description">{description}</p>
        </div>
        <div className="form-body">{children}</div>
      </div>
    </form>
  );
};

export default Form;
