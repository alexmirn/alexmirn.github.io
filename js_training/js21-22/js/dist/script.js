'use strict';

// значение let изменяется только в if, а после читается старое значение
var a = 5;

if (true) {
	var _a = 6;
	console.log('a ', _a);
}

console.log('a ', a);

//шаблоны
var b = 2;
var c = 3;
console.log(b + ' + ' + c + ' = ' + (b + c));

//функция с параметрами по умолчанию
function showText() {
	var title = arguments.length <= 0 || arguments[0] === undefined ? 'DefaultTitle' : arguments[0];
	var a = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];

	console.log(title + ' ' + a);
}

showText('Hello');
showText();

//короткая запись функции
let sum = (a, b) => a + b;
console.log('sum(2,3) ', sum(2,3));

//итератор
let arr = [1, 2, 3];
for (let value of arr) {
	console.log('value ', value);
}