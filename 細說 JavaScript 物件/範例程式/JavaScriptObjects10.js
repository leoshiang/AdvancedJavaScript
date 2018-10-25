var prototypeObject = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var person = Object.create(prototypeObject);
person.firstName = 'Leo';
person.lastName = 'Shiang';

console.log(person.fullName());
