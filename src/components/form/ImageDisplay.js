import React from "react";

const ImageDisplay = ({ image }) => {
  return (
    <div className="flex justify-center">
      <img className="poster-lg" src={image} alt="Imagem para ser enviada" />
    </div>
  );
};

export default ImageDisplay;
