requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery',
		'template': 'template'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
        'template': {
            exports: 'template'
        }
	}
});

require(
	[
		'template',
		'jquery',
		'model',
		'view',
		'controller',
	],
	function (template, $, view, model, controller) {
	}
);