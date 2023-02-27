let myLibrary = [];
let book;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const btn = document.getElementById("add-btn");
const removeBtn = document.querySelectorAll("button");
let table = document.getElementById("table");

let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");
let titleName;
let authorName;
let noOfPages;
let hasBeenRead;

function addBookToLibrary() {
  titleName = title.value;
  authorName = author.value;
  noOfPages = pages.value;
  if (read.checked) {
    hasBeenRead = "Read"
  } else {
    hasBeenRead = "Not read"
  }

  if (titleName.length > 0 && authorName.length > 0 && noOfPages.length > 0) {

    book = new Book(titleName, authorName, noOfPages, hasBeenRead);

    myLibrary.push(book);

    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    c1.innerText = titleName;
    c2.innerText = authorName;
    c3.innerText = noOfPages;
    c4.innerText = hasBeenRead;
  }
  else {
    alert("Please fill all fields")
  }

}

btn.addEventListener("click", addBookToLibrary)