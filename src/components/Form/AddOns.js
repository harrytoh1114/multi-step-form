import React, { useContext } from "react";

import { formContext } from "../../context/formContext";
import Form from "./Form";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CheckCard from "../UI/CheckCard";

const AddOns = () => {
  const formCtx = useContext(formContext);

  return (
    <Form
      //   onSubmit={personalInfoFormHandler}
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
    >
      <CheckCard
        name="online-service"
        title="Online service"
        description="Access to multiplayer games"
        price="+$1/mo"
      />
      <CheckCard
        name="larger-storage"
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price="+$2/mo"
      />
      <CheckCard
        name="customizable-profile"
        title="Customizable profile"
        description="Custom theme on your profile"
        price="+$2/mo"
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
          styles="go-back"
          onClick={() => formCtx.setFormState("plan")}
        >
          Go Back
        </Button>
        <Button
          type="submit"
          styles="next-step"
          onClick={() => formCtx.setFormState("summary")}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
};

export default AddOns;
