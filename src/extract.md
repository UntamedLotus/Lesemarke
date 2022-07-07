import React from "react";

function MainContent() {
const [bookName, setBookName] = React.useState("");
const [pageNumber, setPageNumber] = React.useState("");

const handleBookName = function (e) {
setBookName(e.target.value);
};

const handlePageNumber = function (e) {
setPageNumber(e.target.value);
};

var info = JSON.parse(localStorage.getItem("books") || "[]");

var remove = function (el) {
info.map((el) => localStorage.removeItem("el"));
};

const sign = function () {
return (
<div className="clear" onClick={remove}>
<ion-icon name="close-outline"></ion-icon>
</div>
);
};

const pageInfo = info.map((elem, index) => {
return (
<div className="book-png" key={index}>
<p>
Name of book: <strong>{elem.bookName}</strong>
</p>
<p>
Page Number: <strong>{elem.pageNumber}</strong>
</p>
{sign()}
<div className="break"></div>
</div>
);
});

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

function saveMe() {
let book = {
bookName: bookName,
pageNumber: pageNumber,
};

    info.push(book);

    localStorage.setItem("books", JSON.stringify(info));

}

const onSubmit = function (e) {
e.preventDefault();
setBookName("");
setPageNumber("");
};

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
            <button className="submit" onClick={saveMe}>
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="Info">
        <div className="bookmarked-page">
          {info == "" ? pageIntro() : pageInfo}
        </div>
      </div>
    </div>

);
}

export default MainContent;
