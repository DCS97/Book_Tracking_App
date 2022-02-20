import React from "react";
import "../App.css";
import * as BooksAPI from "../BooksAPI";

const Selector = (props) => {
  const updateBookShelf = (book, shelfId) => {
    BooksAPI.update(book, shelfId).then((response) => console.log(response));
  };

  return (
    <>
      <select
        onChange={(event) => {
          updateBookShelf(props.book, event.target.value);
          props.toggleLoading(true);
        }}
        value={props.book.shelf ? props.book.shelf : "none"}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option key="none" value="none">
          None
        </option>
        <option
          key={`${props.shelvesList[0].id}`}
          value={`${props.shelvesList[0].id}`}
        >
          {`${props.shelvesList[0].title}`}
        </option>
        <option
          key={`${props.shelvesList[1].id}`}
          value={`${props.shelvesList[1].id}`}
        >
          {`${props.shelvesList[1].title}`}
        </option>
        <option
          key={`${props.shelvesList[2].id}`}
          value={`${props.shelvesList[2].id}`}
        >
          {`${props.shelvesList[2].title}`}
        </option>
      </select>
    </>
  );
};
export default Selector;
