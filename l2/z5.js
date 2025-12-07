const person = {
	name: "Alice",

	greet: function() {
		console.log(`Hello, my name is ${this.name}`);
	},

	get info() {
		return `Person: ${this.name}`;
	},
	set info(newName) {
		this.name = newName;
	}
};

console.log(person.name);
person.greet();
console.log(person.info);

person.info = "Krzysiu";         
console.log(person.name);
