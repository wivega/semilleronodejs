/*
 * Implementar nuestras clases con la forma antigua y actual y utilizando expresiones 
 */
const URL_DB = "https://www.dbooks.org/";
const IMG_PATH = "img/books/";

//FORMA ANTIGUA
function OldBook(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.createdAt = new Date();
    this.stock = 100;
    this.img = URL_DB + IMG_PATH + id + 's' + '.jpg';
    this.urlDescription = this.getBookUrl(this.title, this.id);
}

OldBook.prototype = {
    priceToEuro: function () {
        return Intl.NumberFormat('es', { style: 'currency', currency: 'EUR' }).format(this.price);
    },

    getBookDescription: function () {
        return this.urlDescription;
    },

    getBookUrl: function (title, id) {
        let titlePath = title.toLowerCase()
            .replace(/\u0023/g, '')
            .replace(/\s/g, '-') + '-' + id;
        return URL_DB + titlePath;
    }
};

let oldBook1 = new OldBook(1642002046, 'Azure Devops Succinctly', 'Sander Rossel', 47900);
console.log(oldBook1.priceToEuro());
console.log(oldBook1.getBookDescription());


//FORMA ACTUAL
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

//FUNCION COMO EXPRESION
let clientDateFrom = function (age) {
    let now = new Date();
    ageInMills = 31536000000 * age;
    nowMinusAge = now.getTime() - (ageInMills);
    let then1 = new Date(nowMinusAge);
    return then1.toLocaleDateString();
}

console.log(clientDateFrom(29));

//CLASE COMO EXPRESION

let ClientDateFrom = class {
    constructor(age) {
        let now = new Date();
        ageInMills = 31536000000 * age;
        nowMinusAge = now.getTime() - (ageInMills);
        this.then1 = new Date(nowMinusAge);
    }
}
let clientDateFromObject = new ClientDateFrom(29);
console.log(clientDateFromObject.then1);