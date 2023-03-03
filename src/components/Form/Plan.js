import React, { useContext } from "react";

import Form from "./Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { formContext } from "../../context/formContext";

const Plan = () => {
  const formCtx = useContext(formContext);
  const planFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      className="form-control"
      onSubmit={planFormHandler}
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <Input
        type="radio"
        title="Name"
        label="name"
        // value={formState.inputs.name.value}
        placeholder="e.g Stephen King"
        // inputHandler={}
      />
      <Input
        type="email"
        title="Email Adress"
        label="email"
        // value={formState.inputs.email.value}
        placeholder="e.g stephenking@lorem.com"
      />
      <Input
        type="phone"
        title="Phone Number"
        label="phone"
        // value={formState.inputs.phone.value}
        placeholder="e.g Stephen King"
      />
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          type="submit"
          style="go-back"
          onClick={() => formCtx.setFormState("personal")}
        >
          Go Back
        </Button>
        <Button
          type="submit"
          style="next-step"
          onClick={() => formCtx.setFormState("add-ons")}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
};

export default Plan;
