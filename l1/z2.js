function isPrime(n) {
	for(var i = 2; i < n; i++) 
		if (n % i === 0) return false;
	return true;
}

for(var n = 2; n < 100000; n++) {
	if(isPrime(n)) console.log(n);
}
