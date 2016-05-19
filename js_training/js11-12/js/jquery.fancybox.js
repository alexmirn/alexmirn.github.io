(function($) {

	$.fn.fancybox = function(options) {
		// базовые настройки
		var defaults = {
			overlayColor: 'black',
			font: 'Arial'
		};

		// расширяет базовые настройки, перезаписывая из options повторяющиеся поля в defaults
		var settings = $.extend(defaults, options); 
		var $link = this;
		var $body = $('body');
		var $model;
		var $overlay;

		function showModule(e) {
			var href = $link.attr('href');
			$model = $('<div class="fancybox-model"><img class="my-image" src="' + href + '"></div>');
			$overlay = $('<div class="fancybox-overlay">');
			// вставляем базовые настройки в новосозданный объект
			$overlay.css({
				'background-color': settings.overlayColor
			});

			e.preventDefault(); // отменяет типичное поведение(в нашем случае отменяется переход по ссылке)

			$body.append($overlay);
			$body.append($model);
			$overlay.one('click', hideModule); // one('click', ...) - обработчик выполнится один раз и сотрется из памяти
		}

		function hideModule(e) {
			// удаляем элементы, чтобы они не дублировались
			$model.remove();
			$overlay.remove();
		}

		$link.on('click', showModule);

		return this;
	}	
})(jQuery);


// при создании плагина используется IIFE
// (function($){
// })(jQuery); - фактически благодаря этому создана изолированная область

// fn  - служебный объект в библиотеке jQuery, который хранит все методы, для объекта jQuery
// $.fn.fancybox = function() {} - добавление нового поля


// ------------простой пример плагина------------------
// (function($) {

// 	$.fn.fancybox = function() {
// 		alert('plugin!');
// 		return this;
// 	}	
// })(jQuery);

// ------------простой пример плагина с добавлением картинки снизу по клику------------------
// (function($) {

// 	$.fn.fancybox = function() {
// 		var $link = this;
// 		var $body = $('body');

// 		function showModule(e) {
// 			var href = $link.attr('href');
// 			var $model = $('<div class="fancybox-model"><img src="' + href + '"></div>');

// 			e.preventDefault(); // отменяет типичное поведение(в нашем случае отменяется переход по ссылке)

// 			$body.append($model);
// 		}

// 		$link.on('click', showModule);

// 		return this;
// 	}	
// })(jQuery);

// --------------работающий плагин без доп. наворотов --------------------------
// (function($) {

// 	$.fn.fancybox = function() {
// 		var $link = this;
// 		var $body = $('body');
// 		var $model;
// 		var $overlay;

// 		function showModule(e) {
// 			var href = $link.attr('href');
// 			$model = $('<div class="fancybox-model"><img class="my-image" src="' + href + '"></div>');
// 			$overlay = $('<div class="fancybox-overlay">');

// 			e.preventDefault(); // отменяет типичное поведение(в нашем случае отменяется переход по ссылке)

// 			$body.append($overlay);
// 			$body.append($model);
// 			$overlay.one('click', hideModule); // one('click', ...) - обработчик выполнится один раз и сотрется из памяти
// 		}

// 		function hideModule(e) {
// 			$model.hide();
// 			$overlay.hide();
// 		}

// 		$link.on('click', showModule);

// 		return this;
// 	}	
// })(jQuery);
