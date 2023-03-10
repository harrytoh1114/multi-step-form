import React, { useContext } from "react";

import { formContext } from "../../context/formContext";
import Button from "../UI/Button";
import SummaryCard from "../UI/SummaryCard";

const Summary = () => {
  const formCtx = useContext(formContext);

  const { formData } = formCtx;

  return (
    <>
      <SummaryCard
        plan={formData.plan}
        period={formData.period}
        addOns={formData.addOns}
      />
      <div className="button-wrapper">
        <Button
          type="button"
          styles="go-back"
          onClick={() => formCtx.setFormState("add-ons")}
        >
          Go Back
        </Button>
        <Button type="submit" style={{marginLeft: "auto"}} styles="confirm">
          Confirm
        </Button>
      </div>
    </>
  );
};

export default Summary;
