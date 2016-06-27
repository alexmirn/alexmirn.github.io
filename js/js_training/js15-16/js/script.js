// function GoogleCallback(jqueryObj, data) {
// 	console.log('data', data);
// }

// $(function() {
// 	$.ajax({
// 		url:
// 		'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' 
// 		+ 'test' + '&callback=GoogleCallback&context=?',
// 		data:{
// 			abc:123
// 		},
// 		method:'GET',
// 		dataType:
// 		'jsonp',
// 		success: function(){},
// 		error: function(){}
// 	});	
// });


var animal = {
	name: 'Aza',
	age: 7
}

var dog = {
	age: 2
}

dog.__proto__ = animal;

console.log('dog.name - ', dog.name);

function Form(){
	this.typeOfCompany = 'LLC';
}

function Company(){
	this.name = '3Anet';
	this.people = 35;
}

Company.prototype = new Form();

var newCompany = new Company()

console.log('newCompany.typeOfCompany - ', newCompany.typeOfCompany);

Company.prototype.sayHello = function(){
		alert('Hello fom MSV!');
	}

newCompany.sayHello();


var Constructor = function(){};
var object = new Constructor();
console.log(object.__proto__ === Constructor);
console.log(object.__proto__ === Constructor.prototype);
console.log(object.__proto__ === Constructor.__proto__);

var Constructor = function() {
        this.a = 1;
        this.b = 2;
}

var object = Constructor();