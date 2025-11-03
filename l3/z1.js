let perf;
if (typeof performance !== 'undefined') {
	perf = performance;
} else {
	const { performance: nodePerf } = require('perf_hooks');
	perf = nodePerf;
}

function fibIt(n) {
	var a = 0;
	var b = 1;
	for(;n > 0; n--) [a, b] = [b, a + b];
	return a;
}

function fibRec(n) {
	if(n <= 1) return n;
	else return fibRec(n-1) + fibRec(n-2);
}

function memofib(n) {
	const cache = [0,1];
	for(let i = 2; i <= n; i++)
		cache[i] = cache[i-1] + cache[i-2];
	return cache[n];
}

function supermemofib() {
	const cache = {};

	return function fib(n) {
		if(n <= 1) return n;
		if(cache[n]) return cache[n];
		cache[n] = fib(n-1) + fib(n-2);
		return cache[n];
	};
}

function time(f, n) {
	const start = performance.now();
	f(n);
	const end = performance.now();
	return (end - start).toFixed(3);
}

function center(text, width) {
	text = String(text);
	const totalPadding = Math.max(width - text.length, 0);
	const leftPadding = Math.floor(totalPadding / 2);
	const rightPadding = totalPadding - leftPadding;
	return ' '.repeat(leftPadding) + text + ' '.repeat(rightPadding);
}

console.log("  n  |   fib(n)  | iterative | recursive ");
console.log("-----+-----------+-----------+-----------");
for(var n = 10; n <= 40; n++) {
	const num = center(n, 5);
	const v = center(fibIt(n), 11);
	const it = center(time(fibIt, n) + "ms", 11);
	const rec = center(time(fibRec, n) + "ms", 11);
	console.log(`${num}|${v}|${it}|${rec}`);
}
