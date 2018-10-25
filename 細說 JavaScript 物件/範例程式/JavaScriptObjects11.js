var prototypeObject = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var person = Object.create(prototypeObject);
person.firstName = 'Leo';
person.lastName = 'Shiang';
for (var property in person) {
    console.log(property);
}

console.log(Object.keys(person));
