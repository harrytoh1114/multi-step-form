import React, { useContext, useEffect, useState } from "react";

import { formContext } from "../../context/formContext";
import useWindowDimension from "../../hooks/useWindowDimension";
import Card from "../UI/Card";
import AddOns from "./AddOns";
import Complete from "./Complete";
import "./FinalForm.css";
import Form from "./Form";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Summary from "./Summary";

const FinalForm = () => {
  const formCtx = useContext(formContext);
  const [formHeader, setFormHeader] = useState("");
  const { width } = useWindowDimension();

  const { formState, setFormState } = formCtx;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setFormState("complete");
    console.log(formCtx.formData);
  };

  useEffect(() => {});

  useEffect(() => {
    switch (formState) {
      case "personal":
        setFormHeader({
          title: "Personal Info",
          description:
            "Please provide your name, email address, and phone number.",
        });
        return;
      case "plan":
        setFormHeader({
          title: "Select your plan",
          description: "You have the option of monthly or yearly billing.",
        });
        return;
      case "add-ons":
        setFormHeader({
          title: "Pick add-ons",
          description: "Add-ons help enhance your gaming experience",
        });
        return;
      case "summary":
        setFormHeader({
          title: "Finishing up",
          description: "Double-check everything looks OK before confirming",
        });
        return;
      default:
        return;
    }
  }, [formState]);

  return (
    <Card classes="form-wrapper">
      <div className="form-status">
        <ul className="list">
          <li className="inner-list">
            <div
              className={`numbering-wrapper ${
                formState === "personal" && "active"
              }`}
            >
              1
            </div>
            {width > 768 && (
              <div className="step-wrapper">
                <p className="step">Step 1</p>
                <p className="step-name">Your Info</p>
              </div>
            )}
          </li>
          <li className="inner-list">
            <div
              className={`numbering-wrapper ${
                formState === "plan" && "active"
              }`}
            >
              2
            </div>
            {width > 768 && (
              <div className="step-wrapper">
                <p className="step">Step 2</p>
                <p className="step-name">Select Plan</p>
              </div>
            )}
          </li>
          <li className="inner-list">
            <div
              className={`numbering-wrapper ${
                formState === "add-ons" && "active"
              }`}
            >
              3
            </div>
            {width > 768 && (
              <div className="step-wrapper">
                <p className="step">Step 3</p>
                <p className="step-name">Add-ons</p>
              </div>
            )}
          </li>
          <li className="inner-list">
            <div
              className={`numbering-wrapper ${
                (formState === "summary" || formState === "complete") &&
                "active"
              }`}
            >
              4
            </div>
            {width > 768 && (
              <div className="step-wrapper">
                <p className="step">Step 4</p>
                <p className="step-name">Summary</p>
              </div>
            )}
          </li>
        </ul>
      </div>
      {formState !== "complete" && (
        <>
          <Form
            onSubmit={formSubmitHandler}
            title={formHeader.title}
            description={formHeader.description}
          >
            {formState === "personal" && <PersonalInfo />}
            {formState === "plan" && <Plan />}
            {formState === "add-ons" && <AddOns />}
            {formState === "summary" && <Summary />}
          </Form>
        </>
      )}
      {formState === "complete" && <Complete />}

    </Card>
  );
};

export default FinalForm;
