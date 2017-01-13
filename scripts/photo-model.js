define('photo-model', ['backbone', 'jquery'], function (Backbone, $) {
	'use strict';

	return Backbone.Model.extend({
		// Model properties
		title: '',
		link: '',
		mediaUrl: '',
		dateTaken: '',
		description: '',
		datePublished: '',
		author: '',
		authorId: '',
		tags: '',

		// Override URL since it has nothing to do with the model's ID
		url: function () { return this.mediaUrl; },

		// Override sync to only allow get requests
		sync: function (method) {
			if (method === 'read') {
				return Backbone.sync.apply(this, arguments);
			} else {
				// blank deferred
				return $.Deferred().resolve();
			}
		}
	});
});
