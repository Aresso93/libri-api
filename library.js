class Library{

    constructor(bookArray = []){

        this.bookArray = bookArray;
    }




    addBook(book){

        this.bookArray.push(book);
    }


    deleteBook(index){
        this.bookArray.splice(index, 1);
    }










}