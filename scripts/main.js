requirejs.config({
    paths: {
        'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min', 'lib/jquery.min'],
		'underscore': ['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min', 'lib/underscore-min'],
		'backbone': ['https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min', 'lib/backbone.min'],
		'bootstrap': ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min', 'lib/bootstrap.min'],
		'text': 'lib/text'
    },
	shim: {
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require(['page-view'], function (PageView) {
	'use strict';

	var view = new PageView();
	view.render();
});
