;$(function() {
	var $inputs = $('.inputs input');

	$inputs.hover(
		function(){
			$(this).next('em').show();
		},
		function(){
			$(this).next('em').hide();
		}
	);

	$('button').on('click', function(){
		$('em').show();
	});
});