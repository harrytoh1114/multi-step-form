import React, { useState, useReducer, useContext } from "react";
import { formContext } from "../../context/formContext";
import Button from "../UI/Button";

import Input from "../UI/Input";
import Form from "./Form";

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case "validateName":
//       if(!state.inputs.name.value) {
//         return {...state, state.inputs[action.payload]}
//       }
//   }
// };

const PersonalInfo = () => {
  //   const [formState, dispatch] = useReducer(formReducer, {
  //     inputs: {
  //       name: {
  //         value: "",
  //         isValid: false,
  //       },
  //       email: {
  //         value: "",
  //         isValid: false,
  //       },
  //       phone: {
  //         value: "",
  //         isValid: false,
  //       },
  //     },
  //     formIsValid: false,
  //   });

  //   const inputChangeHandler = (e) => {
  //     dispatch({ type: "" });
  //   };

  const formCtx = useContext(formContext);

  const personalInfoFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form
      className="form-control"
      onSubmit={personalInfoFormHandler}
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
    >
      <Input
        type="text"
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
          justifyContent: "flex-end",
        }}
      >
        <Button
          type="submit"
          style="next-step"
          onClick={() => formCtx.setFormState("plan")}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
