import React, { useState } from "react";
import ImageDisplay from "../../components/form/ImageDisplay";
import InputButton from "../../components/form/InputButton";
import InuptField from "../../components/form/InuptField";
import TextTitle from "../../components/form/TextTitle";
import { addNewBook } from "../../helper/api_book";
import { IoSaveOutline } from "react-icons/io5";

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
        {image && <ImageDisplay image={image} />}

        <TextTitle value="Adicionar um Livro" />

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
          label={<IoSaveOutline />}
          onClick={(e) => addNewBook(e, file, book, setLoading, setError)}
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default BookNew;
