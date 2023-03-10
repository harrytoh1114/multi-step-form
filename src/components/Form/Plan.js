import React, { useContext, useState } from "react";

import Button from "../UI/Button";
import "./Plan.css";
import { formContext } from "../../context/formContext";
import RadioCard from "../UI/RadioCard";

import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";
import ToggleSwitch from "../UI/ToggleSwitch";

const Plan = () => {
  const formCtx = useContext(formContext);
  const { formData, setFormData, setFormState } = formCtx;

  const [currentPlan, setCurrentPlan] = useState(
    { name: "arcade", price: 9 } || formData.plan
  );
  const [planPeriod, setPlanPeriod] = useState(formData.period || "monthly");

  const selectPlanHandler = (plan) => {
    setCurrentPlan(plan);
  };

  const planPeriodHandler = (e) => {
    if (e.target.checked) {
      setPlanPeriod("yearly");
    } else {
      setPlanPeriod("monthly");
    }
  };

  const nextPageHandler = () => {
    setFormData({
      ...formData,
      plan: currentPlan,
      period: planPeriod,
    });

    setFormState("add-ons");
  };

  return (
    <>
      <div className="plan-wrapper">
        <RadioCard
          imageUrl={arcade}
          title="Arcade"
          price={planPeriod === "monthly" ? "$9/mo" : "$90/yr"}
          active={currentPlan.name === "arcade" ? true : undefined}
          onClick={() => selectPlanHandler({ name: "arcade", price: 9 })}
          isYearly={planPeriod === "yearly"}
        />
        <RadioCard
          imageUrl={advanced}
          title="Advanced"
          price={planPeriod === "monthly" ? "$12/mo" : "$120/yr"}
          active={currentPlan.name === "advanced" ? true : undefined}
          onClick={() => selectPlanHandler({ name: "advanced", price: 12 })}
          isYearly={planPeriod === "yearly"}
        />
        <RadioCard
          imageUrl={pro}
          title="Pro"
          price={planPeriod === "monthly" ? "$15/mo" : "$150/yr"}
          active={currentPlan.name === "pro" ? true : undefined}
          onClick={() => selectPlanHandler({ name: "pro", price: 15 })}
          isYearly={planPeriod === "yearly"}
        />
      </div>
      <div className="plan-switch">
        <div className="plan-switch-wrapper">
          <p
            className={`plan-switch-period ${
              planPeriod === "monthly" && "selected"
            }`}
          >
            Monthly
          </p>
          <ToggleSwitch
            name="period"
            checked={planPeriod === "monthly" ? false : true}
            isChecked={planPeriodHandler}
          />
          <p
            className={`plan-switch-period ${
              planPeriod === "yearly" && "selected"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
      <div className="button-wrapper">
        <Button
          type="button"
          styles="go-back"
          onClick={() => formCtx.setFormState("personal")}
        >
          Go Back
        </Button>
        <Button type="button" style={{marginLeft: "auto"}} styles="next-step" onClick={nextPageHandler}>
          Next Step
        </Button>
      </div>
    </>
  );
};

export default Plan;
