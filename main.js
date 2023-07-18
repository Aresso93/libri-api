console.log('Er Maino');

let library;

DBService.getAllBooks()
.then(books =>{
    library = new Library(books);
    renderLibrary();
})

function renderLibrary(){

    const booksContainer = document.getElementById('main-container');
    booksContainer.innerHTML = '';

    if (library){

    for (let i = 0; i < library.bookArray.length; i++) {
        const book = library.bookArray[i];
        const div = document.createElement('div');
        div.classList.add('book-card');

        const titleStrong = document.createElement('strong');
        const titleNode = document.createTextNode(book.title);
        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        const authorSpan = document.createElement('span');
        const authorNode = document.createTextNode(book.author);
        authorSpan.appendChild(authorNode);
        div.appendChild(authorSpan);

        booksContainer.appendChild(div);
        
        }
      
    }
}

renderLibrary();