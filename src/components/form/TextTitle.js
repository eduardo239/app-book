const TextTitle = ({ value = "Value", icon }) => {
  return (
    <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-5">
      {value}
    </h1>
  );
};

export default TextTitle;
