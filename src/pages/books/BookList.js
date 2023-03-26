import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import BookCard from "../../components/book/BookCard";
import { getAllbooks } from "../../helper/api_book";

const breakpointCols = {
  default: 5,
  1100: 3,
  700: 2,
  500: 1,
};

const BookList = () => {
  const [books, setBooks] = useState([]);

  console.log(books);

  useEffect(() => {
    (async function loadBooks() {
      const bookList = await getAllbooks();
      setBooks(bookList);
    })();

    return () => {};
  }, []);

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {books.map((book) => {
        return <BookCard book={book} />;
      })}
    </Masonry>
  );
};

export default BookList;
