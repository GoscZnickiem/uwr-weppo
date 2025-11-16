function Tree(val, left, right) {
	this.left = left;
	this.right = right;
	this.val = val;
}

Tree.prototype[Symbol.iterator] = function*() {
	var queue = [this];
	while(queue.length > 0) {
		var [node, ...rest] = queue;
		queue = rest;

		if(node.left) queue.push(node.left);
		if(node.right) queue.push(node.right);

		yield node.val;
	}
}

var root = new Tree( 1,
	new Tree( 2, new Tree( 3 ) ), new Tree( 4 ));
for ( var e of root ) {
	console.log( e );
}
