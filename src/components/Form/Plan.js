import React, { useContext, useState } from "react";

import Form from "./Form";
import Button from "../UI/Button";
import "./Plan.css";
import { formContext } from "../../context/formContext";
import RadioCard from "../UI/RadioCard";

import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";
import ToggleSwitch from "../UI/ToggleSwitch";

const Plan = () => {
  const [currentPlan, setCurrentPlan] = useState("");
  const [planPeriod, setPlanPeriod] = useState("monthly");

  const formCtx = useContext(formContext);

  const planFormHandler = (e) => {
    e.preventDefault();
  };

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

  return (
    <Form
      onSubmit={planFormHandler}
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className="plan-wrapper">
        <RadioCard
          imageUrl={arcade}
          title="Arcade"
          price="$9/mo"
          active={currentPlan === "arcade" ? true : undefined}
          onClick={() => selectPlanHandler("arcade")}
          isYearly={planPeriod === "yearly"}
        />
        <RadioCard
          imageUrl={advanced}
          title="Advanced"
          price="$12/mo"
          active={currentPlan === "advanced" ? true : undefined}
          onClick={() => selectPlanHandler("advanced")}
          isYearly={planPeriod === "yearly"}
        />
        <RadioCard
          imageUrl={pro}
          title="Pro"
          price="$15/mo"
          active={currentPlan === "pro" ? true : undefined}
          onClick={() => selectPlanHandler("pro")}
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
          <ToggleSwitch name="period" isChecked={planPeriodHandler} />
          <p
            className={`plan-switch-period ${
              planPeriod === "yearly" && "selected"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          type="submit"
          styles="go-back"
          onClick={() => formCtx.setFormState("personal")}
        >
          Go Back
        </Button>
        <Button
          type="submit"
          styles="next-step"
          onClick={() => formCtx.setFormState("add-ons")}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
};

export default Plan;
