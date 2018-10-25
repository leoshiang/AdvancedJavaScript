var book = {
    title: 'Beauty of JavaScript',
    isbn: '978-986-347-859-1',
    price: 400,
    displayTitle: function() {
        console.log(this.title);
    }
}

console.log(Object.keys(book));
