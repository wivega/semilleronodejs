const URL_DB = "https://www.dbooks.org/";
const IMG_PATH = "img/books/";

const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['Books.js'] = (function () {
    const exports = {};

    exports.getFechaCreacion = function (book) {
        return Intl.DateTimeFormat("es-ES").format(book.createdAt);
    };

    exports.randomIdGenerator = function () {
        return 'xxxxxxx'.replace(/[x]/g, function (c) {
            return Math.floor(Math.random() * 10 + 1)
        });
    };

    exports.addBook = function (book) {
        k = false;
        while (!k) {
            let id = Math.floor(Math.random() * 1000000) + 1;
            if (!BOOK_BD.has(id)) {
                BOOK_BD.set(id, book);
                k = true;
            }
        }
        return book;
    };

    exports.bookFind = function (title) {
        let book = undefined;
        for (myBook of BOOK_BD.values()) {
            if (myBook.title.toUpperCase().indexOf(title.toUpperCase()) >= 0) {
                book = myBook;
            }
        }
        return book;
    };

    return exports;
}());

const bookMd = require('Books.js');

class Book {
    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.createdAt = new Date();
        this.stock = 100;
        this.img = URL_DB + IMG_PATH + id + 's' + '.jpg';
        this.urlDescription = this.getBookUrl(this.title, this.id);
    }

    priceToEuro() {
        return Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format(this.price);
    }

    getBookDescription() {
        return this.urlDescription;
    }

    getBookUrl = function (title, id) {
        let titlePath = title.toLowerCase()
            .replace(/\u0023/g, '')
            .replace(/\s/g, '-') + '-' + id;
        return URL_DB + titlePath;
    }
}

class Client {
    constructor(cliName, cliLastName) {
        this.id = randomIdGenerator();
        this.cliName = cliName;
        this.cliLastName = cliLastName;
        this.myBooks = new Set();
    }

    addBook2(book) {
        this.myBooks.add(book);
    }
}

let BOOK_BD = new Map();

bookMd.addBook(new Book(1642002046, 'Azure Devops Succinctly', 'Sander Rossel', 47900));
bookMd.addBook(new Book(1642002011, 'Azure serverless Succinctly', 'Sander Rossel', 28500));
bookMd.addBook(new Book(0999773070, 'How to manage a REDIS database', 'Mark Drake', 64500));
bookMd.addBook(new Book(1484228960, 'Desmitifying Internet of Things Security', 'Sunil Senuru', 79000));
bookMd.addBook(new Book(1642002097, 'C# Features Succinctly', 'Dirk Strauss', 47900));
bookMd.addBook(new Book(1494, 'Visual Studio 2019 Succinctly', 'Alessandro del Sole', 44000));
bookMd.addBook(new Book(5614607280, 'The Vue HandBook', 'Flavio Copes', 47900));
bookMd.addBook(new Book(1491945176, '5 Unsung Tools of DevOps', 'Jonathan Thurman', 49000));
bookMd.addBook(new Book(5614276519, 'The NodeJS HandBook', 'Flavio Copes', 37900));
bookMd.addBook(new Book(1491912472, 'Everything is Distributed', 'Courtney Nash', 65500));

for (myBook2 of BOOK_BD.keys()) {
    let book = BOOK_BD.get(myBook2);
    console.log(`Titulo: ${book.title} | Autor: ${book.author} | Valor (Euros): 
    ${book.priceToEuro()} |Fecha de creación: ${bookMd.getFechaCreacion(book)}`);
}

