//Creating important variables and setting the DOM
const books = document.querySelector('.books');
const btnAdd = document.querySelector('.addBook');


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

let theBook


    myLibrary.forEach(newBook=>{

        if(theBook!=undefined) books.removeChild(theBook);

       theBook = document.createElement('div');
       let newTitle = document.createElement('div');
       let newAuthor = document.createElement('div');
       let newPages = document.createElement('div');
       let newRead = document.createElement('div');

 
       theBook.classList.add('theBook');
       newTitle.classList.add('theTitle');
       newAuthor.classList.add('theAuthor');
       newPages.classList.add('thePages');
       newRead.classList.add('theRead');
       


       newTitle.textContent = newBook.title;
       newAuthor.textContent = newBook.author;
       newPages.textContent = newBook.pages;
       newRead.textContent = newBook.read;

        books.appendChild(theBook)
        theBook.appendChild(newTitle)
        theBook.appendChild(newAuthor) 
        theBook.appendChild(newPages) 
        theBook.appendChild(newRead) 
    
      
        
        
        

    })
    
};

addBookToLibrary('check','check','check','check');
addBookToLibrary('check2','check2','check2','check2');
addBookToLibrary('check3','check3','check3','check3');
addBookToLibrary('check4','check4','check4','check4');
addBookToLibrary('check5','check5','check5','check5');