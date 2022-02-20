import React from "react";
import "../App.css";
import { CloseSearch, Book } from ".";

const Search = (props) => {
  return (
    <div>
      <div className="search-books-bar">
        <CloseSearch />
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={props.input}
            onChange={(event) => {
              props.setInput(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        {props.booksList && props.booksList.length > 0 ? (
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
        ) : (
          props.input && (
            <h2 className="empty-state">
              Sorry, we couldn't find any book that matches your search 😔
            </h2>
          )
        )}
      </div>
    </div>
  );
};
export default Search;
