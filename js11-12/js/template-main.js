$(function() {
	var html = $('#test').html();
	var data = {
		fio: 'Мирный Алексей Сергеевич',
		photo: 'img/alex.jpg',
		info: 'Работник невидимого фронта',
		reason: [
			'Тащусь от фронтенда',
			'Буду крутым подаваном',
			'Накошу бабла, как зайцы трын траву',
		],
		phone: '+380503812217',
		vkontakte: 'http://vk.com/id6743895',
		feadback: 'Всё ништяк, ребята'
	};

	var content = tmpl(html, data);

	$('body').append(content);

});
