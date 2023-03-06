import React, { useContext } from "react";
import { formContext } from "../../context/formContext";

import Card from "../UI/Card";
import AddOns from "./AddOns";
import "./FinalForm.css";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Summary from "./Summary";

const FinalForm = () => {
  const formCtx = useContext(formContext);

  return (
    <Card classes="form-wrapper">
      <div className="form-status">
        <ul className="list">
          <li
            className="inner-list"
            onClick={() => formCtx.setFormState("personal")}
          >
            <div
              className={`numbering-wrapper ${
                formCtx.formState === "personal" && "active"
              }`}
            >
              1
            </div>
            <div className="step-wrapper">
              <p className="step">Step 1</p>
              <p className="step-name">Your Info</p>
            </div>
          </li>
          <li
            className="inner-list"
            onClick={() => formCtx.setFormState("plan")}
          >
            <div
              className={`numbering-wrapper ${
                formCtx.formState === "plan" && "active"
              }`}
            >
              2
            </div>
            <div className="step-wrapper">
              <p className="step">Step 2</p>
              <p className="step-name">Select Plan</p>
            </div>
          </li>
          <li
            className="inner-list"
            onClick={() => formCtx.setFormState("add-ons")}
          >
            <div
              className={`numbering-wrapper ${
                formCtx.formState === "add-ons" && "active"
              }`}
            >
              3
            </div>
            <div className="step-wrapper">
              <p className="step">Step 3</p>
              <p className="step-name">Add-ons</p>
            </div>
          </li>
          <li
            className="inner-list"
            onClick={() => formCtx.setFormState("summary")}
          >
            <div
              className={`numbering-wrapper ${
                formCtx.formState === "summary" && "active"
              }`}
            >
              4
            </div>
            <div className="step-wrapper">
              <p className="step">Step 4</p>
              <p className="step-name">Summary</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="form-input">
        {formCtx.formState === "personal" && <PersonalInfo />}
        {formCtx.formState === "plan" && <Plan />}
        {formCtx.formState === "add-ons" && <AddOns />}
        {formCtx.formState === "summary" && <Summary />}
      </div>
    </Card>
  );
};

export default FinalForm;
