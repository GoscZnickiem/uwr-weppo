type Person = {
    name: string;
    surname: string;
}

type Animal = {
    name: string;
    species: string;
}

type PersonAndAnimal = Person & Animal;

function printPersonAndAnimal(pa: PersonAndAnimal) {
    console.log(pa.name, pa.surname, pa.species);
}

type PersonAndString = Person & string; // never

type PersonOrAnimal = Person | Animal;

function printPersonOrAnimal(pa: PersonOrAnimal) {
    console.log(pa.name);
    if ("surname" in pa) console.log(pa.surname);
    if ("species" in pa) console.log(pa.species);
}

type PersonOrString = Person | string;

function printPersonOrString(x: PersonOrString) {
    if (typeof x === "string") {
        console.log("String:", x);
    } else {
        console.log("Person:", x.name, x.surname);
    }
}

type StringAndNumber = string & number; // never

type StringOrNumber = string | number;

function printStringOrNumber(x: StringOrNumber) {
    console.log(x);
}
