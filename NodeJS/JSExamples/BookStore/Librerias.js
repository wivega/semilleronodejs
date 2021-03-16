class Book {
    constructor(title,author,price){
        this.id = randomIdGenerator();
        this.title=title;
        this.author=author;
        this.price=price;
        this.createdAt = new Date();
        this.stock = 100;
    }
}

class Client {
    constructor(id, cliName, cliLastName)
}

function randomIdGenerator(){
    return 'xxxxxxx'.replace(/[x]/g, function(c){
        return Math.floor(Math.random()*10+1)
    });
}


let BOOK_BD = new Map();

function addBook(book){
    k = false;
    while(!k){
        let id = Math.floor(Math.random()*1000000)+1;
        if(!BOOK_BD.has(id)){
            BOOK_BD.set(id,book);
            k=true;
        }
    }
    return book;
    
}
addBook(new Book('EL CLUB DE LAS 5 DE LA MAÑANA', 'Robin Sharma',47900));
addBook(new Book('NARRACIONES EXTRAORDINARIAS', 'Edgar Allan Poe',28500));
addBook(new Book('MOBY DICK', 'Herman Melville',64500));
addBook(new Book('UNA TIERRA PROMETIDA', 'Barack Obama',79000));
addBook(new Book('EL PODER DEL AHORA', 'Eckhart Tolle',44000));
addBook(new Book('CREA Y DIVAGA', 'Jeff Bezzos',49000));
addBook(new Book('HARRY POTTER Y LA PIEDRA FILOSOFAL', 'J.K. ROWLING',39000));

function bookFind(title){
    let book=undefined;
    for(myBook of BOOK_BD.values()){
        if(myBook.title.toUpperCase().indexOf(title.toUpperCase())>=0){
            book=myBook;
        }
    }
    return book;
}

let book2 = bookFind('CREA').stock-=3;

for(myBook2 of BOOK_BD.values()){
    console.log(JSON.stringify(myBook2));
}



/*

for(myBook of BOOK_BD.values()){
    console.log(myBook.title.indexOf("MOBY"));
}

function bookFind(title){
    let book=undefined;
    for(myBook of BOOK_BD.values()){
        if(myBook.title.toUpperCase().indexOf(title.toUpperCase())>=0){
            book=myBook;
        }
    }
    return book;
    
}
*/

