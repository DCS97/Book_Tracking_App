import React from "react";
import Book from "./Book.js";
import "../App.css";

const Shelf = (props) => {
  return (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksList.map((book) => (
              <li key={book.id}>
                <Book
                  toggleLoading={props.toggleLoading}
                  shelvesList={props.shelvesList}
                  item={book}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Shelf;
