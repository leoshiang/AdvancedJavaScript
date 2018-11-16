var availableStock = 37;

var product = {
    name: 'Apple iPhone X'
};

var fullName = function () {
    console.log(this.name);
    console.log(window.availableStock);
    console.log(this === product);
    console.log(this);
    console.log(this === window);
};

product.getFullName = fullName;
product.getFullName();