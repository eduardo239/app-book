import React from "react";
import InputButton from "../../components/form/InputButton";
import InuptField from "../../components/form/InuptField";
import TextTitle from "../../components/form/TextTitle";

const BookNew = () => {
  return (
    <div>
      {" "}
      <div className="flex center-items justify-center mb-1">
        <form style={{ width: "400px" }} className="bg-white p-5 rounded">
          <TextTitle value="Adicionar um Livro" />
          <InuptField type="text" label="Título" />
          <InuptField type="text" label="Descrição" />
          <InuptField type="text" label="Autor" />
          <InputButton full label="Salvar" />
        </form>
      </div>
    </div>
  );
};

export default BookNew;
