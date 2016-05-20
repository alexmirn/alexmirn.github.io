// 2-ой вариант уже с шаблоном
$(function() {
	var html = $('#test').html();
	var data = {title: 'Hello, Alex!'};

	var content = tmpl(html, data);

	$('body').append(content);

});

// 1-ый вартант без использования шаблона
// $(function() {
// 	var template = $('#test').html();

// 	$('body').append(template);

// });
