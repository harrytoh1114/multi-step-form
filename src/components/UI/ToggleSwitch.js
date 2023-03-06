import React from "react";
import Switch from "react-switch";

import "./ToggleSwitch.css";

const ToggleSwitch = ({ name, isChecked }) => {
  return (
    <div className="toggle-switch-wrapper">
      <label className="toggle-switch">
        <input type="checkbox" name={name} id={name} onChange={(e) => isChecked(e)}/>
        <span className="toggle-switch-slider" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
