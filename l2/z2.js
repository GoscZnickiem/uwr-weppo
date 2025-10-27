// 1)

const obj = {
  name: "Alice",
  age: 25,
};

// Operator kropki
console.log(obj.name); // "Alice"

// Operator nawiasów
console.log(obj["age"]); // 25

// 2)

const key = "name";
console.log(obj[key]); // "Alice"

// 3)

const obj2 = {};
obj2[123] = "number key";
obj2[{ a: 1 }] = "object key";

console.log(obj2);
console.log(obj2["123"]);         // "number key"
console.log(obj2["[object Object]"]); // "object key"

// 4)

const arr = [10, 20, 30];

// napis jako indeks
arr["2"] = 300; // traktowane jak liczba 2
console.log(arr); // [10, 20, 300]

// inny obiekt jako indeks
const keyObj = { x: 1 };
arr[keyObj] = 999; // klucz "[object Object]"
console.log(arr[keyObj]); // 999:""
console.log(arr); // [10, 20, 300] - długość się nie zmienia

// 5)

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length); // 5

arr2.length = 3;
console.log(arr2); // [1, 2, 3] → elementy po 3 są usunięte

arr2.length = 6;
console.log(arr2); // [1, 2, 3, <3 empty items>] → dodano "puste" miejsca

