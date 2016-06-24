var app = require('../js/app.js')

describe("app", function() {
  it("should call sayHello method", function() {

  	//prepare
  	var result;

  	//act
  	result = app.sayHello('Alex');

  	//assert
    expect(result).toEqual('Hello, Alex');
  });

  it("should call sгь method", function() {

  	//prepare
  	var result;

  	//act
  	result = app.sum(2, 3);

  	//assert
    expect(result).toEqual(5);
  });

});