var app = {
	sayHello: function(name) {
		return 'Hello, ' + name;
	},
	sum: function(a, b) {
		return a + b;
	},
}

try {
	module.exports = app;	
} catch(e) {}