requirejs.config({
    paths: {
        'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min', 'lib/jquery.min'],
		'underscore': ['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min', 'lib/underscore-min'],
		'backbone': ['https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min', 'lib/backbone.min'],
		'bootstrap': ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min', 'lib/bootstrap.min']
    },
	shim: {
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'underscore', 'backbone', 'bootstrap'], function ($, _, Backbone, bootstrap) {
	'use strict';

    console.log($);
	console.log('loaded jquery');

	console.log(_);
	console.log('loaded underscore');

	console.log(Backbone);
	console.log('loaded backbone');

	console.log(bootstrap);
	console.log('loaded bootstrap');
});
