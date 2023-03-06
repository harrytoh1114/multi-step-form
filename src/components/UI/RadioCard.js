import React from "react";

import "./RadioCard.css";

const RadioCard = ({ imageUrl, title, price, active, onClick, isYearly }) => {
  return (
    <div className={`radio-card ${active && "selected"}`} onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <div className="radio-card-details">
        <h3 className="radio-title">{title}</h3>
        <p className="radio-price">{price}</p>
        {isYearly && <p className="radio-complimentary">2 months free</p>}
      </div>
    </div>
  );
};

export default RadioCard;
