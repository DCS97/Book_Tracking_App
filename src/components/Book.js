import React from "react";
import Selector from "./Selector";
import "../App.css";

const Book = (props) => {
  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                props.item.imageLinks && props.item.imageLinks.smallThumbnail
                  ? `url(${props.item.imageLinks.smallThumbnail})`
                  : "none",
            }}
          />
          <div className="book-shelf-changer">
            <Selector
              toggleLoading={props.toggleLoading}
              shelvesList={props.shelvesList}
              book={props.item}
            />
          </div>
        </div>
        <div className="book-title">{props.item.title}</div>
        <div className="book-authors">
          {(props.item.authors && props.item.authors.length) > 1
            ? props.item.authors.join(", ")
            : props.item.authors}
        </div>
      </div>
    </>
  );
};
export default Book;
