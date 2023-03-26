import React from "react";
import Masonry from "react-masonry-css";
import BookCard from "../../components/book/BookCard";
const bookTest = [
  {
    id: 1,
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/81G-ZYI5ewL.jpg",
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    descricao:
      "Um hobbit relutante embarca em uma jornada épica para recuperar um tesouro roubado por um dragão feroz.",
    editora: "George Allen & Unwin",
    ano_publicacao: 1937,
    genero: "Fantasia",
  },
  {
    id: 2,
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    titulo: "1984",
    autor: "George Orwell",
    descricao:
      "Um funcionário público luta contra um sistema de vigilância governamental opressivo enquanto se apaixona por uma mulher que também desafia as autoridades.",
    editora: "Secker & Warburg",
    ano_publicacao: 1949,
    genero: "Ficção Distópica",
  },
  {
    id: 3,
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/51DnKtHfv1L.jpg",
    titulo: "O Apanhador no Campo de Centeio",
    autor: "J.D. Salinger",
    descricao:
      "Um adolescente tenta encontrar seu lugar no mundo após ser expulso da escola.",
    editora: "Little, Brown and Company",
    ano_publicacao: 1951,
    genero: "Ficção Realista",
  },
  {
    id: 4,
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/51Dg%2BJ-nbpL.jpg",
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    descricao:
      "Um jovem hobbit é encarregado de destruir um anel maligno que ameaça a Terra-média.",
    editora: "George Allen & Unwin",
    ano_publicacao: 1954,
    genero: "Fantasia",
  },
  {
    id: 5,
    posterURL:
      "https://images-na.ssl-images-amazon.com/images/I/61RvWyLjx6L._SY445_.jpg",
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    descricao:
      "Um piloto encontra um príncipe do espaço durante uma queda de avião no deserto.",
    editora: "Reynal & Hitchcock",
    ano_publicacao: 1943,
    genero: "Fábula",
  },
];

const breakpointCols = {
  default: 5,
  1100: 3,
  700: 2,
  500: 1,
};

const BookList = () => {
  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {bookTest.map((book) => {
        return <BookCard book={book} />;
      })}
    </Masonry>
  );
};

export default BookList;
