import React, { useContext } from "react";
import { formContext } from "../../context/formContext";

import Card from "../UI/Card";
import "./FinalForm.css";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";

const FinalForm = () => {
  const formCtx = useContext(formContext);

  return (
    <Card classes="form-wrapper">
      <div className="form-status">
        <ul className="list">
          <li className="inner-list">
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
          <li className="inner-list">
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
          <li className="inner-list">
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
          <li className="inner-list">
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
      </div>
    </Card>
  );
};

export default FinalForm;
