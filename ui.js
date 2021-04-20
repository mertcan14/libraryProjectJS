class UI{
    static addFormUI(){
        const form = document.getElementById("book-form");
        form.innerHTML += `
            
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input class="form-control" type="text" name="title" id = "title" placeholder="Kitap İsmi">
                    </div>
                    <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="author" id = "author" placeholder="Yazar">
                    </div>
                    <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="category" id = "category" placeholder="Kitap Kategori">
                    </div>
                    <div class="form-group col-md-6">
                            <input class="form-control" type="text" name="totalPage" id = "totalPage" placeholder="Kitap Sayfa Sayısı">
                    </div>
                    <div class="form-group col-md-12">
                            <input class="form-control" type="text" name="url" id = "url" placeholder="Kitap Afiş Linki">
                    </div>
                </div>
                <button type = "button" class="btn btn-danger btn-block">Kitabı Ekleyin</button>`
    }

    static addBookToUI(newBook){
        const album = document.getElementById("album");
        album.innerHTML += `
                <div class="col-md-4" style="margin-top: 3%;">
                        <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" width="100%" height="275" src="${newBook.url}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                                <div class="card-body">
                                        <h4 class="text-center">${newBook.title}</h4>
                                        <p class="card-text">Kitabın Yazarı: ${newBook.author} 'dir. Kitabın kategorisi ise ${newBook.category}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                        <button type="button" class="btn btn-sm btn-outline-danger">Listeden Kaldır</button>
                                                </div>
                                        <small class="text-muted">${newBook.totalPage} sayfa</small>
                                </div>
                        </div>
                </div>`
    }

    static removeAddBookButton(){
        const button = document.getElementById("section").children[0].children[0].children[2];
        button.remove();
    }

    static loadAllBooks(books){
        books.forEach(book => {
                const album = document.getElementById("album");
                album.innerHTML +=`
                <div class="col-md-4" style="margin-top: 3%;">
                        <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" width="100%" height="275" src="${book.url}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

                                <div class="card-body">
                                        <h4 class="text-center">${book.title}</h4>
                                        <p class="card-text">Kitabın Yazarı: ${book.author} 'dir. Kitabın kategorisi ise ${book.category}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                                <div class="btn-group">
                                                        <button type="button" id="delete-book" class="btn btn-sm btn-outline-danger">Listeden Kaldır</button>
                                                </div>
                                        <small class="text-muted">${book.totalPage} sayfa</small>
                                </div>
                        </div>
                </div>`
        });
    }

    static displayMessages(messages,type){
        const cardBody = document.getElementById("section");
        const div = document.createElement("div");
    
        div.className = `alert alert-${type}`;
        div.textContent = messages;
    
        cardBody.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000);
    }

    static deleteBookFromUI(element){
        element.parentElement.parentElement.remove();
    }

    static clearInputs(element1, element2, element3, element4, element5) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
        element4.value = "";
        element5.value = "";
    }
}