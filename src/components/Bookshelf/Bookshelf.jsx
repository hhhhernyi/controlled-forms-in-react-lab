import { useState } from "react";

export default function Bookshelf() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({title:'', author:''});

    function handleInputChange(event) {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    }
    function handleSubmit(event) {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({...newBook, title:'', author:''})
    }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id='title' name='title' value={newBook.title} onChange={handleInputChange}></input>
            
            <label htmlFor="author">Author: </label>
            <input id='author' name='author' value={newBook.author} onChange={handleInputChange}></input>
           
            <button type='submit'>Add book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book) => (
            <div key={book.title} className="bookCard">
                <h3>{book.title}</h3>
                <p>By {book.author}</p>
                </div>
            ))}
        </div>
    </div>
  );
}
