var app = {
	pow:	function(number, power) {
      var result;
      var positiveResult = true;

      if (number < 0) {
        number = -number;
        positiveResult = checkPositiveResult(power);
      }

      result = calculateResult(number, power);

      if (!positiveResult) {
        result = -result;
      }

      console.log('result = ', result);
      return result;
    },

    checkPositiveResult: function(power) {
      var positiveResult = true;

      if ( (power%2 == 1) || (power%2 == -1) ) {
          positiveResult = false;
      }

      return positiveResult;
    },
    
    calculateResult: function(number, power) {
      var result;

      if (power >= 0) {
        result = 1;
        for (var i = 0; i < power; i++) {
          result *= number;
        }
      } else {
        result = number;
        power = - power;
        for (var i = 0; i < power; i++) {
          result /= 10;
        }
      }

      return result;
    },
}

try {
	module.exports = app;	
} catch(e) {}