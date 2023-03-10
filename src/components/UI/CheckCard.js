import React, { useEffect, useState } from "react";

import "./CheckCard.css";

const CheckCard = ({ name, title, description, price, onClick, checked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [defaultChecked, setDefaultChecked] = useState(undefined);

  useEffect(() => {
    if (checked === title) {
      setDefaultChecked(true);
    } else {
      setDefaultChecked(false);
    }
  }, [checked, title]);

  return (
    <div
      className={`check-card ${
        isChecked || defaultChecked ? "selected" : undefined
      }`}
    >
      <label className="check-card-details" htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          defaultChecked={defaultChecked}
          onClick={onClick}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        />
        <span className="checkmark"></span>
        <div className="check-card-details-wrapper">
          <h3 className="check-card-title">{title}</h3>
          <p className="check-card-description">{description}</p>
        </div>
        <div>
          <p className="check-card-price">{price}</p>
        </div>
      </label>
    </div>
  );
};

export default CheckCard;
