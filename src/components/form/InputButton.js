import React from "react";

const InputButton = ({ color = "blue", full = false }) => {
  return (
    <button
      class={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded ${
        full ? "w-full" : ""
      }`}
    >
      Botão de preenchimento total
    </button>
  );
};

export default InputButton;
