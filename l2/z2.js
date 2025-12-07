// 1)

const obj = {
	name: "Grzesiu",
	age: 25,
};

console.log(obj.name);
console.log(obj["age"]);

// 2)

const key = "name";
console.log(obj[key]);

// 3)

const obj2 = {};
obj2[123] = "number key";
obj2[{ a: 1 }] = "object key";

console.log(obj2);
console.log(obj2["123"]);
console.log(obj2["[object Object]"]);

// 4)

const arr = [10, 20, 30];

arr["2"] = 300;
console.log(arr);

const keyObj = { x: 1 };
arr[keyObj] = 999;
console.log(arr[keyObj]);
console.log(arr);

// 5)

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length);

arr2.length = 3;
console.log(arr2);

arr2.length = 6;
console.log(arr2);
