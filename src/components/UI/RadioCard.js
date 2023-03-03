import React from "react";

import "./RadioCard.css";

const RadioCard = ({ imageUrl, title, price }) => {
  return (
    <div className="radio-card">
      <img src={imageUrl} alt={title} />
      <div className="radio-card-details">
        <h3 className="radio-title">{title}</h3>
        <p className="radio-price">{price}</p>
      </div>
    </div>
  );
};

export default RadioCard;
