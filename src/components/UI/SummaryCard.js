import React, { useContext } from "react";
import { formContext } from "../../context/formContext";

import "./SummaryCard.css";

const SummaryCard = ({ plan, period, addOns }) => {
  const formCtx = useContext(formContext);

  return (
    <div className="summary-card">
      <div className="summary-card-details">
        <div className="summary-card-plan-details">
          <div className="summary-card-plan-detail">
            <h3 className="summary-card-plan-title">Arcade (Monthly)</h3>
            <button
              onClick={() => {
                formCtx.setFormState("plan");
              }}
              className="summary-card-plan-change"
            >
              Change
            </button>
          </div>
          <h4 className="summary-card-plan-price">$9/mo</h4>
        </div>
        <hr className="summary-divider" />
        <div className="sumamary-card-plan-addOns">
          <div className="summary-card-plan-addOn">
            <p className="summary-card-plan-addOn-title">Online service</p>
            <p className="summary-card-plan-addOn-price">+$1/mo</p>
          </div>
        </div>
      </div>
      <div className="summary-card-summary-total">
        <p className="summary-card-summary-title">Total per month</p>
        <p className="summary-card-summary-amount">$12/mo</p>
      </div>
    </div>
  );
};

export default SummaryCard;
