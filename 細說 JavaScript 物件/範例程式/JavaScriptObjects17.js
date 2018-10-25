function Book(title, isbn, price) {
    this.title = 'Beauty of JavaScript';
    this.isbn = '978-986-347-859-1';
    this.price = 400;
    this.displayTitle = function() {
        console.log(this.title);
    }
}
var book1 = new Book('Beauty of JavaScript',
    '978-986-347-859-1', 400);
var book2 = new Book('Effective JavaScript',
    '978-986-276-892-1', 450);

console.log(book1.constructor === Book);
console.log(book2.constructor === Book);
console.log(book1 instanceof Book);
console.log(book2 instanceof Book);
console.log(book1 instanceof Object);
console.log(book2 instanceof Object);
