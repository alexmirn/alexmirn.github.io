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