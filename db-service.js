class DBService {

    static getAllBooks() {
        const url = 'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/books';


        return fetch(url)
            .then(resp => resp.json())
            .then(result => this.convertToBookArray(result))
            .catch(error => console.log(error.message));

    }

    static deleteBook(id){
        console.log('Delete', id);
        const deleteUrl = 'https://64b512c9f3dbab5a95c6a4ff.mockapi.io/books/' + id;
        console.log(deleteUrl);
        return fetch(deleteUrl, {method: 'delete'})
        .then(resp => resp.json());
    }

    static convertToBookArray(genericArray){
        const tempArray = [];
        for (const object of genericArray) {
            const newBook = new Book(object.title, object.author, new Date(object.dop), object.genre, object.cover, object.id);
            tempArray.push(newBook)
        }

        return tempArray;
    }


}