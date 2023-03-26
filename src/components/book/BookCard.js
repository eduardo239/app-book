import { useNavigate } from "react-router-dom";
import posterDefault from "../../assets/images/book-poster.jpg";
import ImageDisplay from "../form/ImageDisplay";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/books/${book.id}`)}
      className="hover:cursor-pointer p-2 bg-white shadow-md overflow-hidden"
    >
      <ImageDisplay
        image={book.posterURL ? book.posterURL : posterDefault}
        alt={book.titulo}
      />

      <div className="px-1 py-4">
        <h2 className="text-lg font-bold text-gray-800">{book.titulo}</h2>
        <p className="text-sm text-gray-700 mb-8 font-normal">{book.autor}</p>
        <div className="max-h-52 overflow-auto">
          <p className="text-md text-gray-600 mt-2">{book.descricao}</p>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Lançamento: {book.ano_publicacao}
        </p>
        <p className="text-sm text-gray-300 mt-4">
          Quantidade de páginas: {book.quantidade_paginas}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
