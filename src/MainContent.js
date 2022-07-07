import React from "react";
import Books from "./Books";
import { nanoid } from "nanoid";

// Getting data

const collectedInfo = () => {
  const info = localStorage.getItem("books");
  if (info) {
    return JSON.parse(info);
  } else {
    return [];
  }
};

function MainContent() {
  const [bookName, setBookName] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState("");
  const [id, setId] = React.useState("");

  const [books, setBooks] = React.useState(collectedInfo());

  const handleBookName = function (e) {
    setBookName(e.target.value);
  };

  const deleteBook = (id) => {
    const filteredBooks = books.filter((element, index) => {
      return element.id !== id;
    });
    setBooks(filteredBooks);
  };

  const handlePageNumber = function (e) {
    setPageNumber(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();

    let book = {
      bookName,
      pageNumber,
      id: nanoid(),
    };
    setBooks([...books, book]);

    setBookName("");
    setPageNumber("");
    setId("");
  };

  const pageIntro = function () {
    return (
      <div className="intro">
        <h2 className="title">Lesemarke</h2>
        <p className="text">
          Love reading too much books & not able to bookmark them physically?
        </p>
        <p className="text">
          I always run into that kind of problem, lesemarke app will help you
          keep track on those plenty of forgettable page numbers with virtual
          bookmarks.
        </p>
        <p className="text">
          This app is made by using <span className="underlined">React</span>.
        </p>
      </div>
    );
  };

  // Saving data
  React.useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="App">
      <div className="MainContent">
        <div className="img-container">
          <img
            className="bookmark-img"
            src="/images/Bookmarks.jpg"
            alt="Photo by pure julia on Unsplash"
          />
        </div>
      </div>

      <div className="form-container centered">
        <form className="card" onSubmit={onSubmit}>
          <div className="in-el">
            <label>
              Book Name :
              <input
                type="text"
                onChange={handleBookName}
                name="bookName"
                value={bookName}
                placeholder="Enter book Name"
              />
            </label>
            <br />
            <label>
              Page Number :
              <input
                type="number"
                onChange={handlePageNumber}
                name="pageNumber"
                value={pageNumber}
                placeholder="Enter page Number"
              />
            </label>
          </div>
          <div>
            <button className="submit"> Save</button>
          </div>
        </form>
      </div>

      <div className="Info">
        <div className="bookmarked-page">
          {books.length === 0 ? (
            pageIntro()
          ) : (
            <Books books={books} deleteBook={deleteBook} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
