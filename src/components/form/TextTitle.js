import React from "react";

const TextTitle = ({ value = "Value", icon }) => {
  return (
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-5">
      {value}
    </h1>
  );
};

export default TextTitle;
