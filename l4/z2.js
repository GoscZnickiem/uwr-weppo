function isOwn(obj, prop) {
	return obj.hasOwnProperty(prop);
}

function isFromPrototype(obj, prop) {
	return !isOwn(obj, prop) && prop in obj;
}

var p = { name: 'jan' };
var q = { surname: 'kowalski' };
Object.setPrototypeOf(p, q);

console.log("isOwn(name): ", isOwn(p, 'name'));
console.log("isOwn(surname): ", isOwn(p, 'surname'));
console.log("isFromPrototype(name): ", isFromPrototype(p, 'name'));
console.log("isFromPrototype(surname): ", isFromPrototype(p, 'surname'));

console.log("Owned properties: ", Object.keys(p));

var keys = []
for (let key in p) {
	keys.push(key);
}
console.log("All properties: ", keys);


