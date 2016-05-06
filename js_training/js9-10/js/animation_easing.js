// jquery animation
$('.jquery-box').on('click', function(){
	$(this).animate({
		left: '+=100'
	}, 1000, 'easeInCirc');
});
// easeInCirc - параметр сглаживания анимации

//css animation
$('.css-box').on('click', function(){
	$(this).addClass('css-box-animated');
});