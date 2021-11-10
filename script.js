//Creating important variables and setting the DOM
const books = document.querySelector('.books');

let myLibrary = [];



// Settings the constructor for each book that will show up in the array 'myLibrary'
function Book (title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
};

//Adding the book to the library each time the user inputs a new one 
function addBookToLibrary (title, author, pages, read) {
    
    const newBook = new Book(title, author, pages, read);
     myLibrary.push(newBook);
    
     displayBooks();

};

//Displays the library and gets updated each time the user adds a new one 
function displayBooks () {

    myLibrary.forEach(book=>{
       let newTitle = document.createElement('div');
       let newAuthor = document.createElement('div');
       let newPages = document.createElement('div');
       let newRead = document.createElement('div');
       let bookToDisplay = document.createElement('div');


        newTitle.textContent = book.title;
        newAuthor.textContent = book.author;
        newPages.textContent = book.pages;
        newRead.textContent = book.read;

        bookToDisplay.appendChild(newTitle).className = 'newTitle';
        bookToDisplay.appendChild(newAuthor).className = 'newAuthor';
        bookToDisplay.appendChild(newPages).className = 'newPages';
        bookToDisplay.appendChild(newRead).className = 'newRead';
        books.appendChild(bookToDisplay).className = 'bookToDisplay';

    })
    
};
