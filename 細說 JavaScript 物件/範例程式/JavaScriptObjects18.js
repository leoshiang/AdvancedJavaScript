function Book() {}

Book.prototype.title = 'Beauty of JavaScript';
Book.prototype.isbn = '978-986-347-859-1';
Book.prototype.price = 400;
Book.prototype.displayTitle = function() {
    console.log(this.title);
};

var book1 = new Book();
book1.displayTitle(); 
var book2 = new Book();
book2.displayTitle(); 
console.log(book1.displayTitle === book2.displayTitle); 