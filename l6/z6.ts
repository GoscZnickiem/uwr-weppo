type A = "a" | "b" | "c";

type OnlyAorB = Extract<A, "a" | "b">;  // "a" | "b"
type NotB = Exclude<A, "b">;            // "a" | "c"

const x1: OnlyAorB = "a";
const x2: NotB = "a";



type Person = { name: string; age: number };
type PersonMap = Record<string, Person>;

const people: PersonMap = {
	jan: { name: "Jan", age: 20 },
	anna: { name: "Anna", age: 25 }
};



type PartialPerson = { name?: string; age?: number };
type FullPerson = Required<PartialPerson>;



const person: Readonly<Person> = { name: "Jan", age: 20 };
// person.age = 21; // Error



const update: Partial<Person> = { age: 21 }; // Everything is optional



type Book = { name: string; author: Person; date: string };
type AnonymousBook = Pick<Book, "name" | "date">; 
type AnonymousBook2 = Omit<Book, "author">; 



type AgeType = Person["age"]; // number
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const p: Person = { name: "Jan", age: 20 };
const age: AgeType = getProperty(p, "age"); // number
