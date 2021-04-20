const addBookButton = document.getElementById("addBook");
const album = document.getElementById("album");
const addBookSubmit = document.getElementById("book-form");

eventListeners();

function eventListeners(){
    addBookButton.addEventListener("click", addBook);
    document.addEventListener("DOMContentLoaded", function(){
        let books = Storage.getBooksFromStorage();
        UI.loadAllBooks(books);
    });
    album.addEventListener("click", deleteBook);
}

function addBook(e){
    UI.addFormUI();
    UI.removeAddBookButton();
    addBookSubmit.children[1].addEventListener("click", addBookSubmitFunc);
}

function addBookSubmitFunc(e){
    const title = addBookSubmit.children[0].children[0].children[0];
    const author = addBookSubmit.children[0].children[1].children[0];
    const totalPage = addBookSubmit.children[0].children[3].children[0];
    const category = addBookSubmit.children[0].children[2].children[0];
    const url = addBookSubmit.children[0].children[4].children[0];

    if (title.value === "" || author.value === "" || totalPage.value === "" || category.value === "" || url.value === "") {
        UI.displayMessages("Tüm Alanları Doldurmalısınız", "danger");
    }

    const newBook = new Book(title.value, author.value, totalPage.value, category.value, url.value);
    UI.addBookToUI(newBook);
    Storage.addBookToStorage(newBook);
    UI.clearInputs(title, author, totalPage, category, url);
}

function deleteBook(e){
    if (e.target.id == "delete-book") {
        Storage.deleteBookFromStorage(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.deleteBookFromUI(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling);
    }
    
}