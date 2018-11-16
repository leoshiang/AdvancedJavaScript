var dog = {
    name: 'Doggie'
};
var animal = {
    weight: 100,
    walk: function () {
        console.log(this.weight);
        console.log(window.dog);
        console.log(this === animal);
        console.log(this);
    }
};

animal.walk();