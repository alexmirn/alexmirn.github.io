// javascript animation
function slideLeft(el, duration){
	var leftPosition = parseInt(el.style.left) || 0;
	var time = 0;
	// frames per second
	var fps = 50;

	var interval = setInterval(function(){
		if (time > duration) {
			clearInterval(interval);
		}

		leftPosition += 2;
		el.style.left = leftPosition + 'px';
		time += duration/fps;

	}, duration/fps);
};

var box = document.querySelector('.js-box');

box.addEventListener('click', function(){
	slideLeft(box, 1000);
});

// jquery animation
$('.jquery-box').on('click', function(){
	$(this).animate({
		left: '+=100'
	}, 1000);
});

//css animation
$('.css-box').on('click', function(){
	$(this).addClass('css-box-animated');
});