var person = {
	firstName: "Leo",
	lastName: "Shiang",
	fullName: function() {
		return this.firstName + " "	+ this.lastName;
	}
};

console.log(person);