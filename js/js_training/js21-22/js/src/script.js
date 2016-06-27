// значение let изменяется только в if, а после читается старое значение
let a = 5;

if (true) {
	let a = 6 ;
	console.log('a ', a);
}

console.log('a ', a);

//шаблоны
let b = 2;
let c = 3;
console.log(`${b} + ${c} = ${b+c}`);

//функция с параметрами по умолчанию
function showText(title ='DefaultTitle', a=200) {
	console.log(`${title} ${a}`);
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