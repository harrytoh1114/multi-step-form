import React, { useState } from "react";

import "./CheckCard.css";

const CheckCard = ({ name, title, description, price }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`check-card ${isChecked ? "selected" : undefined}`}>
      <label className="check-card-details" htmlFor={name}>
        <input
          type="checkbox"
          id={name}
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
