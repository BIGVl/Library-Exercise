//Creating important variables and setting the DOM
const books = document.querySelector('.books');
const btnAdd = document.querySelector('.addBook');
let deleteB = document.createElement('button');



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

let theBook;

    myLibrary.forEach(newBook=>{
       
        if(theBook!=undefined) books.removeChild(theBook);
        

       
        theBook = document.createElement('div');
        let newTitle = document.createElement('div');
        let newAuthor = document.createElement('div');
        let newPages = document.createElement('div');
        let ifRead = document.createElement('div');
        let newRead = document.createElement('input');
        newRead.setAttribute('type', 'checkbox');
        newRead.setAttribute('id', "theRead")
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', 'theRead')
        newLabel.textContent = 'Have you read it?'
        let deleteB = document.createElement('button');
        deleteB.textContent = 'Delete';
        
      
 
       theBook.classList.add('theBook');
       newTitle.classList.add('theTitle');
       newAuthor.classList.add('theAuthor');
       newPages.classList.add('thePages');
       ifRead.classList.add('ifRead')
       newRead.classList.add('theRead');
       deleteB.classList.add('delete')
       
      
     
       
     


       newTitle.textContent = newBook.title;
       newAuthor.textContent = newBook.author;
       newPages.textContent = newBook.pages + ' pages';
       newRead.textContent = newBook.read;
       

        books.appendChild(theBook)
        theBook.appendChild(newTitle)
        theBook.appendChild(newAuthor) 
        theBook.appendChild(newPages)
        ifRead.appendChild(newLabel) 
        ifRead.appendChild(newRead)
        theBook.appendChild(ifRead)
        theBook.appendChild(deleteB)


    newRead.addEventListener('click', ()=>{
    if (newRead.checked==true) newLabel.textContent = 'Done';
    else newLabel.textContent = 'Have you read it?'
    })

    
        

    
      deleteB.addEventListener('click', ()=>{

        
        myLibrary = myLibrary.filter((newBook)=>{
            if (newBook.title!=newTitle.textContent || newBook.author != newAuthor.textContent) return newBook;
        })

         books.removeChild(theBook);
          
      })
        
        
        

    })
    
};



addBookToLibrary('check','check','check','check');
addBookToLibrary('check2','check2','check2','check2');
addBookToLibrary('check3','check3','check3','check3');
addBookToLibrary('check4','check4','check4','check4');
addBookToLibrary('check5','check5','check5','check5')
addBookToLibrary('check6','check5','check5','check5');
addBookToLibrary('check7','check7','check5','check5');
addBookToLibrary('check8','check5','check5','check5');
addBookToLibrary('check9','check5','check5','check5');
addBookToLibrary('check10','check5','check5','check5');
addBookToLibrary('check11','check5','check5','check5');

