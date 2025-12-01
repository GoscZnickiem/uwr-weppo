type User = {
	type: "user";
	name: string;
	age: number;
	occupation: string;
}

type Admin = {
	type: "admin";
	name: string;
	age: number;
	role: string;
}

type Person = User | Admin;
const persons: Person[] = [
	{
		type: "user",
		name: 'Jan Kowalski',
		age: 17,
		occupation: 'Student'
	},
	{
		type: "admin",
		name: 'Tomasz Malinowski',
		age: 20,
		role: 'Administrator'
	}
];

function logPerson(person: Person) {
	let additionalInformation: string;
	if (person.type === 'admin') {
		additionalInformation = person.role;
	} else {
		additionalInformation = person.occupation;
	}
	console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
