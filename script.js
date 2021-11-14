//Creating important variables and setting the DOM
const books = document.querySelector('.books');
const btnAdd = document.querySelector('.addBook');
const closeForm = document.querySelector('.close-button');
const submit = document.querySelector('.submit-book');
const form = document.querySelector('#form');
const overlay = document.querySelector('.overlay');
const formTitle = document.querySelector('.title');
const formAuthor = document.querySelector('.author');
const formPages = document.querySelector('.pages');




let myLibrary = [];



// Settings the constructor for each book that will show up in the array 'myLibrary'
function Book (title, author, pages) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = 'Have you read it?'
    
    
    
    
};

//Adding the book to the library each time the user inputs a new one 
function addBookToLibrary (title, author, pages) {
    
    const newBook = new Book(title, author, pages);
     myLibrary.push(newBook);
    

};
//When the button 'Add a book' is pressed a form will pop-up so the user can enter the book's information and add it to the library 
btnAdd.addEventListener('click', () =>{

    form.classList.add('active');
    overlay.classList.add('active');
    
})

submit.addEventListener('click',() => {
    if (formTitle.value==='' || formAuthor.value==='' || formPages.value==='') return;

    addBookToLibrary(formTitle.value, formAuthor.value, formPages.value);
    displayBooks();
    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
    form.classList.remove('active');
    overlay.classList.remove('active');
})

//Closes the form when the user clicks on the outside the form or on the X button 
overlay.addEventListener('click', () => {
    form.classList.remove('active')
    overlay.classList.remove('active');

})
closeForm.addEventListener('click', () => {
    form.classList.remove('active')
    overlay.classList.remove('active');

});



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
       newAuthor.textContent = 'by '+ newBook.author;
       newPages.textContent = newBook.pages + ' pages';
       newBook.read = newLabel.textContent;
       

        books.appendChild(theBook)
        theBook.appendChild(newTitle)
        theBook.appendChild(newAuthor) 
        theBook.appendChild(newPages)
        ifRead.appendChild(newLabel) 
        ifRead.appendChild(newRead)
        theBook.appendChild(ifRead)
        theBook.appendChild(deleteB)


    newRead.addEventListener('click', ()=>{
    if (newRead.checked==true){ 
        newLabel.textContent = 'Done';
        newBook.read = 'Done'
}
    else{ newLabel.textContent = 'Have you read it?'
    newBook.read = 'Have you read it?'
}
    })

    
        

    
      deleteB.addEventListener('click', ()=>{

        
        myLibrary = myLibrary.filter((newBook)=>{
            if (newBook.title!=newTitle.textContent || newBook.author != newAuthor.textContent) return newBook;
        })

         books.removeChild(theBook);
          
      })
        
        
        

    })
    
};





