// function fib() {
// 	var a = 1;
// 	var b = 0;
// 	return {
// 		next : function() {
// 			[a, b] = [b, a+b];
// 			return {
// 				value : a,
// 				// done : !isFinite(a)
// 				done : false
// 			};
// 		}
// 	};
// }

function *fib() {
	var a = 0;
	var b = 1;
	while(true) {
		yield a;
		[a, b] = [b, a+b];
	}
}

// var it = fib();
// for(var res; res = it.next(), !res.done;) {
// 	console.log(res.value);
// }

for(var i of fib()) {
	console.log(i);
}
