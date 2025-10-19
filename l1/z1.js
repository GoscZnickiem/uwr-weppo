function getRequiredDivisors(n) {
	const digits = String(n).split('').map(Number);
	const set = new Set(digits);
	const sum = digits.reduce((acc, i) => acc + i, 0);
	set.add(sum);
	return set;
}

function divisible(n) {
	for(const d of getRequiredDivisors(n))
		if(n % d !== 0) return false;
	return true;
}

for(var n = 1; n < 100000; n++) {
	if(divisible(n)) console.log(n);
}
