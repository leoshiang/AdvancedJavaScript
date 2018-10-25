var book = new Object();
book.title = 'Beauty of JavaScript';
book.isbn = '978-986-347-859-1';
book.price = 400;

book.displayTitle = function() {
    console.log(this.title);
}
book.displayTitle();