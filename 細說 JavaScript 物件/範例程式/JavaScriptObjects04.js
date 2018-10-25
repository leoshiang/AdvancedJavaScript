var person = {};
person.age = 18;
person.getAge = function() {
	return this.age;
}

console.log(person.getAge());