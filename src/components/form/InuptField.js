const InuptField = ({ type = "text", label = "Label", onChange }) => {
  return (
    <div className="mb-5 bg-gray-100 rounded">
      <label className="text-sm ml-3 text-gray-500">{label}</label>
      <input
        type={type}
        onChange={onChange}
        className="block w-full py-2 px-4 border"
      ></input>
    </div>
  );
};

export default InuptField;
