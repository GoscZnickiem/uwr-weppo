function pipe(xs, ...fns) {
	return fns.reduce((prevResult, fn) => fn( prevResult ), xs);
}
function map( f ) {
	return function( xs ) {
		return xs.map( f );
	}
}
function filter( predicate ) {
	return function( xs ) {
		return xs.filter( predicate );
	}
}
function reduce( foldf ) {
	return function( xs ) {
		return xs.reduce( foldf );
	}
}
function flat() {
	return function( xs ) {
		return xs.flat();
	}
}
function take(n) {
	return function( xs ) {
		return xs.slice(0, n);
	}
}



function groupBy(selector) {
	return function(T) {
		var grouped = Object.groupBy(T, selector);

		return Object.keys(grouped).map(key => {
			const group = grouped[key];
			group.key = key;
			return group;
		})
	};
}

function sort(comp) {
	return function(xs) {
		return xs.sort( (a, b) => comp(a) < comp(b));
	};
}

console.log(
	pipe(
		[
			{ ip: '192.168.0.1' },
			{ ip: '192.168.0.1' },
			{ ip: '192.168.0.2' },
			{ ip: '192.168.0.2' },
			{ ip: '192.168.0.3' },
			{ ip: '192.168.0.17' },
			{ ip: '192.168.0.1' },
		],
		groupBy( e => e.ip ),
		sort( g => -g.length ),
		take(3),
		map( a => ({ ip: a.key, count: a.length }) )
	)
);
