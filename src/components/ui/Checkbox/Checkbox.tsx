import React, { useState } from "react";
import checkVector from "./../../../assets/icons/tic.svg";

type CheckboxProperties = {
  onChange?: Function;
  label?: string;
  isChecked?: boolean;
};

function Checkbox({ onChange, label, isChecked }: CheckboxProperties) {
  const [checked, setChecked] = useState(isChecked || false);

  return (
    <div
      className="checkbox_container"
      onClick={() => {
        setChecked(!checked);
        onChange(!checked);
      }}
    >
      <div className={checked ? "checkbox checked" : "checkbox"}>
        {checked && <img src={checkVector} alt="" />}
      </div>
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;
