import React, { useState } from "react";
import ImageDisplay from "../form/ImageDisplay";
import InputButton from "../form/InputButton";
import InuptField from "../form/InuptField";
import TextTitle from "../form/TextTitle";
import { addNewBook } from "../../helper/api_book";

const BookNew = () => {
  const [file, setFile] = useState(null);
  const [book, setBook] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleImageOnChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex center-items justify-center mb-1">
      <form style={{ width: "400px" }} className="bg-white p-5 rounded">
        <TextTitle value="Adicionar um Livro" />

        {image && <ImageDisplay image={image} />}
        <InuptField label="Poster" type="file" onChange={handleImageOnChange} />

        <InuptField
          type="text"
          label="Título"
          onChange={(e) => setBook({ ...book, titulo: e.target.value })}
        />
        <InuptField
          type="text"
          label="Autor"
          onChange={(e) => setBook({ ...book, autor: e.target.value })}
        />
        <InuptField
          type="text"
          label="Descrição"
          onChange={(e) => setBook({ ...book, descricao: e.target.value })}
        />
        <InputButton
          full
          disabled={loading}
          label={`Salvar`}
          onClick={(e) => addNewBook(e, file, book, setLoading, setError)}
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default BookNew;
