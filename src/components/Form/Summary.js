import React, { useContext } from "react";
import { formContext } from "../../context/formContext";

import Button from "../UI/Button";
import SummaryCard from "../UI/SummaryCard";
import Form from "./Form";

const Summary = () => {
  const formCtx = useContext(formContext);

  return (
    <Form
      //   onSubmit={personalInfoFormHandler}
      title="Finishing up"
      description="Double-check everything looks OK before confirming"
    >
      <SummaryCard />
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
          onClick={() => formCtx.setFormState("add-ons")}
        >
          Go Back
        </Button>
        <Button
          type="submit"
          styles="next-step"
          onClick={() => formCtx.setFormState("summary")}
        >
          Confirm
        </Button>
      </div>
    </Form>
  );
};

export default Summary;
