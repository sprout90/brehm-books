import React, { useState, useEffect} from "react";
import BookList from "./BookList";
import './App.css';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => { 

    async function loadBooks(){
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
      const books = await response.json();
      setBooks(books);
    }

    loadBooks();
  }
  , [])

  

  return (
    <div className="App">
      <BookList books={books} key="1" />
    </div>
  );
}

export default App;
