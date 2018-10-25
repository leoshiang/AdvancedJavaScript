function createBook(title, isbn, price) {
    var book = new Object();
    book.title = 'Beauty of JavaScript';
    book.isbn = '978-986-347-859-1';
    book.price = 400;
    book.displayTitle = function() {
        console.log(this.title);
    }
    return book;
}
var book = createBook('Beauty of JavaScript', '978-986-347-859-1', 400);

console.log(book);
