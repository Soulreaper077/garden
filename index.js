

const myLibrary = [];



// objhect constructor 
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}
// instantiating a new object 
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'no')

console.log(theHobbit);

// variables 
const addBookButton = document.getElementById("addBookBtn");
const readButton = document.getElementById("addRead");
const removeButton = document.getElementById("removeBookbtn");

// Add an event listener to the button
addBookButton.addEventListener("click", function() {
    // Your code to check if the button works
    console.log("Button was clicked!");
});

function addBookToLibrary() {
    // add a book to display onto the dashboard 
}


