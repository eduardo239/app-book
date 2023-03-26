const InputButton = ({
  color = "blue",
  full = false,
  label = "Label",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded ${
        full ? "w-full" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {disabled ? "Aguarde" : label}
    </button>
  );
};

export default InputButton;
