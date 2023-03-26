import React from "react";

const InputCheckbox = ({ label = "Label", onChange }) => {
  return (
    <div className="mb-5 py-3 bg-gray-100">
      <label className="block text-gray-800 pl-3">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          onChange={onChange}
        />
        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
};

export default InputCheckbox;
