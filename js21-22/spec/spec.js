var test = require('../js/test.js')

describe("test", function() {
  it("should call calculateResult method", function() {

    var result;
    result = test.calculateResult(2, 3);
    expect(result).toEqual(8);

    result = test.calculateResult(3, 4);
    expect(result).toEqual(81);

    result = test.calculateResult(1, 0);
    expect(result).toEqual(1);
  });

  it("should call checkPositiveResult method", function() {

    var result;
    result = test.checkPositiveResult(1);
    expect(result).toEqual(false);

    result = test.checkPositiveResult(2);
    expect(result).toEqual(true);

    result = test.checkPositiveResult(-1);
    expect(result).toEqual(false);
  });
});