function createGenerator(N) {
	return function() {
		var _state = 0;
		return {
			next : function() {
				return {
					value : _state,
					done : _state++ >= N
				}
			}
		}
	};
}

var foo1 = {
	[Symbol.iterator] : createGenerator(4)
};
var foo2 = {
	[Symbol.iterator] : createGenerator(8)
};

for ( var f of foo1 )
	console.log(f);
console.log('');
for ( var f of foo2 )
	console.log(f);
