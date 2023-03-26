import React from "react";

const ImageDisplay = ({ image, alt = "App Book" }) => {
  return (
    <div className="flex justify-center">
      <img className="h-64 w-full object-cover" src={image} alt={alt} />
    </div>
  );
};

export default ImageDisplay;
