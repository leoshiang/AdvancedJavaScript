var person = {};
person["weight"] = 80;
person.getWeight = function() {
	return this.weight;
}

console.log(person.getWeight());