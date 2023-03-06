import React, { useState, useReducer, useContext } from "react";
import { formContext } from "../../context/formContext";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Form from "./Form";

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case "VALIDATE_NAME_INPUT":
//       if(!state.inputs.name.value) {
//         return {...state, state.inputs[action.inputType]: action.payload}
//       }
//   }
// };

const PersonalInfo = () => {
    // const [formState, dispatch] = useReducer(formReducer, {
    //   inputs: {
    //     name: {
    //       value: "",
    //       isValid: false,
    //     },
    //     email: {
    //       value: "",
    //       isValid: false,
    //     },
    //     phone: {
    //       value: "",
    //       isValid: false,
    //     },
    //   },
    //   formIsValid: false,
    // });

    // const inputChangeHandler = (e) => {
    //   dispatch({ type: "" });
    // };

  const formCtx = useContext(formContext);

  const personalInfoFormHandler = (e) => {
    e.preventDefault();
  };

  const nextPageHandler = () => {

    formCtx.setFormState("plan");
  };

  return (
    <Form
      onSubmit={personalInfoFormHandler}
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
    >
      <Input
        type="text"
        title="Name"
        label="name"
        value=""
        placeholder="e.g Stephen King"
        errorText="This field is required"
        // onChange={}
      />
      <Input
        type="email"
        title="Email Adress"
        label="email"
        value=""
        placeholder="e.g stephenking@lorem.com"
        errorText="This field is required"
      />
      <Input
        type="phone"
        title="Phone Number"
        label="phone"
        value=""
        placeholder="e.g Stephen King"
        errorText="This field is required"
      />
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button type="submit" styles="next-step" onClick={nextPageHandler}>
          Next Step
        </Button>
      </div>
    </Form>
  );
};

export default PersonalInfo;
