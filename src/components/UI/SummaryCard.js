import React, { useCallback, useContext, useEffect, useState } from "react";

import { formContext } from "../../context/formContext";

import "./SummaryCard.css";

const SummaryCard = ({ plan, period, addOns }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [addOnOrder, setAddOnOrder] = useState([]);

  const sortAddOnArr = useCallback(() => {
    let newAddOnOrder = addOns.sort((a, b) =>
      a.price > b.price ? 1 : a.price < b.price ? -1 : 0
    );
    setAddOnOrder(newAddOnOrder);
  }, [addOns]);

  const getTotalPrice = useCallback(() => {
    let price = 0;

    const planPrice = plan.price;

    if (period === "monthly") {
      price += planPrice;

      for (var a = 0; a < addOns.length; a++) {
        price += addOns[a].price;
      }
    } else {
      price += planPrice * 10;

      for (var b = 0; b < addOns.length; b++) {
        price += addOns[b].price * 10;
      }
    }

    setTotalPrice(price);
  }, [plan, period, addOns]);

  useEffect(() => {
    getTotalPrice();
    sortAddOnArr();

    return () => {
      setTotalPrice(0);
    };
  }, [getTotalPrice, sortAddOnArr]);

  const formCtx = useContext(formContext);

  return (
    <div className="summary-card">
      <div className="summary-card-details">
        <div className="summary-card-plan-details">
          <div className="summary-card-plan-detail">
            <h3 className="summary-card-plan-title">
              <span>{plan.name}</span> <span>({period})</span>
            </h3>
            <button
              onClick={() => {
                formCtx.setFormState("plan");
              }}
              className="summary-card-plan-change"
            >
              Change
            </button>
          </div>
          <h4 className="summary-card-plan-price">
            ${period === "monthly" ? plan.price : plan.price * 10}/
            {period === "monthly" ? "mo" : "yr"}
          </h4>
        </div>
        <hr className="summary-divider" />
        <div className="summary-card-plan-addOns">
          {addOnOrder.length > 0 &&
            addOnOrder.map((addOn) => (
              <div key={addOn.name} className="summary-card-plan-addOn">
                <p className="summary-card-plan-addOn-title">{addOn.name}</p>
                <p className="summary-card-plan-addOn-price">
                  +${period === "monthly" ? addOn.price : addOn.price * 10}/
                  {period === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="summary-card-summary-total">
        <p className="summary-card-summary-title">Total per month</p>
        <p className="summary-card-summary-amount">
          ${totalPrice}/{period === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
