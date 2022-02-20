import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import { OpenSearch, Search, Shelf } from "./components";

function App() {
  const [books, setBooks] = React.useState([]);
  const [searchedBooks, setSearchedBooks] = React.useState([]);
  const [loading, toggleLoading] = React.useState(true);
  const [input, setInput] = React.useState("");

  const shelves = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];

  const fetchBooks = () => {
    if (loading) {
      BooksAPI.getAll()
        .then((serviceBooks) => {
          setBooks(serviceBooks);
        })
        .finally(toggleLoading(false))
        .catch(() => console.log("unable to fetch books"));
    }
  };

  const matchBooks = (response) => {
    response.forEach((responseBook) => {
      books.forEach((book) => {
        if (responseBook.id === book.id) {
          responseBook.shelf = book.shelf;
        }
      });
    });

    setSearchedBooks(response);
  };

  const searchBooks = () => {
    if (input) {
      BooksAPI.search(input)
        .then((response) => {
          matchBooks(response);
        })
        .catch(() => {
          console.log("unable to search books");
        });
    }
  };

  React.useEffect(() => {
    searchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  React.useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className="app">
      <Route
        path="/search"
        render={() => (
          <Search
            input={input}
            setInput={setInput}
            searchBooks={searchBooks}
            toggleLoading={toggleLoading}
            shelvesList={shelves}
            booksList={searchedBooks}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            {shelves.map((shelf) => (
              <div key={shelf.id} className="list-books-content">
                <Shelf
                  toggleLoading={toggleLoading}
                  title={shelf.title}
                  shelvesList={shelves}
                  booksList={books.filter((book) => book.shelf === shelf.id)}
                />
              </div>
            ))}
            <>
              <OpenSearch />
            </>
          </div>
        )}
      />
    </div>
  );
}

export default App;
