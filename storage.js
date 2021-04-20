class Storage{
    static addBookToStorage(newBook){
        let book = this.getBooksFromStorage();
        book.push(newBook);
    
        localStorage.setItem("books", JSON.stringify(book));
    }
    
    static getBooksFromStorage(){
        let books;
    
        if (localStorage.getItem("books") === null) {
            books = []
        }
        else{
            books = JSON.parse(localStorage.getItem("books"));
        }
    
        return books;
    }

    static deleteBookFromStorage(bookTitle){
        let books = this.getBooksFromStorage();
        books.forEach(function(book,index) {
            if (book.title === bookTitle) {
                books.splice(index,1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
}