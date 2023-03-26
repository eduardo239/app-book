import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import posterDefault from "../../assets/images/book-poster.jpg";
import { getBookById } from "../../helper/api_book";

const bookTest = {
  id: 5,
  posterURL: "",
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  descricao:
    "Um piloto encontra um príncipe do espaço durante uma queda de avião no deserto.",
  editora: "Reynal & Hitchcock",
  ano_publicacao: 1943,
  genero: "Fábula",
};
const BookById = () => {
  const { id } = useParams();
  const [book, setBook] = useState(bookTest);
  console.log(book);
  useEffect(() => {
    (async function loadBooks() {
      const bookById = await getBookById(id);
      setBook(bookById);
    })();
    return () => {};
  }, [id]);

  if (book)
    return (
      <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-64 ">
            <img
              className="poster-lg"
              src={book.posterURL !== "" ? book.posterURL : posterDefault}
              alt={book.titulo}
            />
          </div>
          <div className="flex-1">
            <code className="text-sm block w-full p-2 mb-2"># {book.id}</code>
            <h1 className="text-3xl font-bold text-gray-900">{book.titulo}</h1>
            <p className="text-lg font-medium text-gray-900 mt-4">
              <strong>Author:</strong> {book.autor}
            </p>

            <p className="text-lg font-medium text-gray-900">
              <strong>Description:</strong> {book.descricao}
            </p>
          </div>
        </div>
      </div>
    );
};

export default BookById;
