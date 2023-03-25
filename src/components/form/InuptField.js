import React from "react";

const InuptField = ({ type = "text", label = "Label" }) => {
  return (
    <div className="mb-5 bg-yellow-400">
      <label className="text-sm">{label}</label>
      <input type={type} class="block w-full py-2 px-4 border"></input>
    </div>
  );
};

export default InuptField;
