var prototypeObject = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var person = Object.create(prototypeObject, {
    firstName: {
        value: "Leo", writable: false, enumerable: true
    },
    lastName: {
        value: "Shiang", writable: true, enumerable: false
    }
});

console.log(Object.keys(person));