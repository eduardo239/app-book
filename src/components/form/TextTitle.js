import React from "react";

const TextTitle = ({ value = "Value" }) => {
  return <h1 class="text-2xl sm:text-3xl lg:text-4xl">{value}</h1>;
};

export default TextTitle;
