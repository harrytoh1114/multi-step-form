import React from "react";

import "./ToggleSwitch.css";

const ToggleSwitch = ({ name, checked, isChecked }) => {
  return (
    <div className="toggle-switch-wrapper">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          name={name}
          id={name}
          onChange={(e) => isChecked(e)}
        />
        <span className="toggle-switch-slider" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
