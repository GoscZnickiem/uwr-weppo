var Foo = (function() {
	function Qux(x) {
		console.log("Foo::Qux");
	}

	function Foo() {
		
	}

	Foo.prototype.Bar = function() {
		Qux();
	}

	return Foo;
})();

var foo = new Foo();
foo.Bar();
