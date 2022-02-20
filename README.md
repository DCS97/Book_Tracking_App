# Book Tracking App, Udacity React Nanodegree

This project consists in a bookshelf app that allows the user to search, select and categorize several books avaiable in an API. The books can be categorized according to three different states ( read, currently reading, want to read), the state of the book dictates the shelf in the UI where the book is placed.

# Get Started

- install all project dependencies with npm install
- start the development server with npm start
- http://localhost:3000/ to open the app

# Udacity Books API

The application fetches data from the Udacity Books API in order to search for new books, which means internet access is required for all functionality to work correctly. This backend server is required for the project to run correctly, but no additional installation or changes need to be made to the code. The file BooksAPI.js contains all methods that work with this API, as well as its current address.

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
