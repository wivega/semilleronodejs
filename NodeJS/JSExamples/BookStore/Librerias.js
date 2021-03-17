const URL_DB = "https://www.dbooks.org/";
const IMG_PATH = "img/books/";

class Book {
    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.createdAt = new Date();
        this.stock = 100;
        this.img = URL_DB + IMG_PATH + id + 's' + '.jpg';
        this.urlDescription = getBookUrl(this.title, this.id);
    }

    priceToEuro() {
        return Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format(this.price);
    }
}

function getBookUrl(title, id) {
    let titlePath = title.toLowerCase()
    .replace(/\u0023/g,'')
    .replace(/\s/g, '-') + '-' + id;
    return URL_DB + titlePath;
}

function getFechaCreacion(book){
    return Intl.DateTimeFormat("es-ES").format(book.createdAt);
}

class Client {
    constructor(cliName, cliLastName) {
        this.id = randomIdGenerator();
        this.cliName = cliName;
        this.cliLastName = cliLastName;
        this.myBooks = new Set();
    }

    addBook(book) {
        this.myBooks.add(book);
    }
}

function randomIdGenerator() {
    return 'xxxxxxx'.replace(/[x]/g, function (c) {
        return Math.floor(Math.random() * 10 + 1)
    });
}

let BOOK_BD = new Map();

function addBook(book) {
    k = false;
    while (!k) {
        let id = Math.floor(Math.random() * 1000000) + 1;
        if (!BOOK_BD.has(id)) {
            BOOK_BD.set(id, book);
            k = true;
        }
    }
    return book;
}

addBook(new Book(1642002046,'Azure Devops Succinctly','Sander Rossel',47900));
addBook(new Book(1642002011,'Azure serverless Succinctly','Sander Rossel',28500));
addBook(new Book(0999773070,'How to manage a REDIS database','Mark Drake',64500));
addBook(new Book(1484228960,'Desmitifying Internet of Things Security','Sunil Senuru',79000));
addBook(new Book(1642002097,'C# Features Succinctly','Dirk Strauss',47900));
addBook(new Book(1494,'Visual Studio 2019 Succinctly','Alessandro del Sole',44000));
addBook(new Book(5614607280,'The Vue HandBook','Flavio Copes',47900));
addBook(new Book(1491945176,'5 Unsung Tools of DevOps','Jonathan Thurman',49000));
addBook(new Book(5614276519,'The NodeJS HandBook','Flavio Copes',37900));
addBook(new Book(1491912472,'Everything is Distributed','Courtney Nash',65500));

function bookFind(title) {
    let book = undefined;
    for (myBook of BOOK_BD.values()) {
        if (myBook.title.toUpperCase().indexOf(title.toUpperCase()) >= 0) {
            book = myBook;
        }
    }
    return book;
}



for (myBook2 of BOOK_BD.keys()) {
    let book = BOOK_BD.get(myBook2);
    console.log(`Titulo: ${book.title} | Autor: ${book.author} | Valor (Euros): 
    ${book.priceToEuro()} |Fecha de creación: ${getFechaCreacion(book)}`);
}


