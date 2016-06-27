// 3-й вариант с примером цикла
$(function() {
	var html = $('#test').html();
	var articles = [
		{title: 'title1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam natus quidem beatae nulla'},
		{title: 'title2', content: 'Ipsum dolor sit amet, consectetur adipisicing elit. Ullam natus quidem beatae nulla'},
		{title: 'title3', content: 'Dolor sit amet, consectetur adipisicing elit. Ullam natus quidem beatae nulla'}
	]

	// {data: articles} - сделано специально, т.к. передавать надо объект, а массив articles это не объект
	// tmpl - это функция, подгружаемая из файла template.js, где у нас написан простенький шаблонизатор
	var content = tmpl(html, {data: articles});

	$('body').append(content);

});

// 2-ой вариант уже с шаблоном
// $(function() {
// 	var html = $('#test').html();
// 	var data = {title: 'Hello, Alex!'};

// 	var content = tmpl(html, data);

// 	$('body').append(content);

// });

// 1-ый вартант без использования шаблона
// $(function() {
// 	var template = $('#test').html();

// 	$('body').append(template);

// });
