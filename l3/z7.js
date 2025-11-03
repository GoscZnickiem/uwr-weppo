function fib() {
	var a = 1;
	var b = 0;
	return {
		next : function() {
			[a, b] = [b, a+b];
			return {
				value : a,
				// done : !isFinite(a)
				done : false
			};
		}
	};
}

function *take(it, count) {
	for(var i = 0; i < count; i++) {
		yield it.next().value;
	}
}

for(var i of take(fib(), 10)) {
	console.log(i);
}
