function divisorsIt(n) {
	var div = [];
	for(let i = 2; i < n; i++) 
		if(n % i === 0) div.push(i);
	return div;
}

function divisorsRec(n) {
	return (function rec(i) {
		if(i < n) 
			return (n % i === 0 ? [i] : []).concat(rec(i+1));
		return [];
	})(2);
}

console.log(divisorsIt(24));
console.log(divisorsRec(24));
