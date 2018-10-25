function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}

var me = new Person("Leo", "Shiang");
console.log(me);
