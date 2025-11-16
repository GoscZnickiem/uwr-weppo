function getLastProto(o) {
	var p = o;
	do {
		o = p;
		p = Object.getPrototypeOf(o);
	} while (p);
	return o;
}

class I {

}

class A extends I {

}

console.log(getLastProto(String))
console.log(getLastProto(Number))
console.log(getLastProto([]))
console.log(getLastProto(A))
