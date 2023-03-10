import React, { useContext } from "react";

import { formContext } from "../../context/formContext";
import Button from "../UI/Button";
import CheckCard from "../UI/CheckCard";

const AddOns = () => {
  const formCtx = useContext(formContext);
  const { formData, setFormData } = formCtx;

  const addOnHandler = (name, price) => {
    let newAddOn = { name: name, price: price };
    let newAddOns = [];
    let existingAddOns = [...formData.addOns];

    if (existingAddOns.length < 1) {
      newAddOns.push(...formData.addOns, newAddOn);
    } else {
      if (!!existingAddOns.find((a) => a.name === name)) {
        newAddOns = existingAddOns.filter((a) => a.name !== name);
      } else {
        newAddOns.push(...formData.addOns, newAddOn);
      }
    }

    setFormData({ ...formData, addOns: newAddOns });
  };

  const isChecked = (plan) => {
    for (var i = 0; i < formCtx.formData.addOns.length; i++) {
      if (formCtx.formData.addOns[i].name === plan) {
        return plan;
      }
    }
  };

  return (
    <>
      <CheckCard
        name="online-service"
        title="Online service"
        description="Access to multiplayer games"
        price={formData.period === "yearly" ? "+$10/yr" : "+$1/mo"}
        onClick={() => addOnHandler("Online service", 1)}
        checked={isChecked("Online service")}
      />
      <CheckCard
        name="larger-storage"
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={formData.period === "yearly" ? "+$20/yr" : "+$2/mo"}
        onClick={() => addOnHandler("Larger storage", 2)}
        checked={isChecked("Larger storage")}
      />
      <CheckCard
        name="customizable-profile"
        title="Customizable profile"
        description="Custom theme on your profile"
        price={formData.period === "yearly" ? "+$20/yr" : "+$2/mo"}
        onClick={() => addOnHandler("Customizable profile", 2)}
        checked={isChecked("Customizable profile")}
      />
      <div className="button-wrapper">
        <Button
          type="button"
          styles="go-back"
          onClick={() => formCtx.setFormState("plan")}
        >
          Go Back
        </Button>
        <Button
          type="button"
          styles="next-step"
          style={{marginLeft: "auto"}}
          onClick={() => formCtx.setFormState("summary")}
        >
          Next Step
        </Button>
      </div>
    </>
  );
};

export default AddOns;
