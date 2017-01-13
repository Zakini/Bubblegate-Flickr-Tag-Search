define('page-model', ['backbone', 'photo-model', 'jquery', 'underscore'], function (Backbone, PhotoModel, $, _) {
	'use strict';

	return Backbone.Collection.extend({
		tags: [],
		model: PhotoModel,

		// Override sync to only allow get requests
		sync: function (method, model, options) {
			if (method === 'read') {
				options = _.extend(options, {
					jsonp: 'callback',
					dataType: 'jsonp'
				});

				return Backbone.sync(this, arguments);
			} else {
				// blank deferred
				return $.Deferred().resolve();
			}
		},

		baseUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&jsoncallback=callback&tags=',

		url: function () {
			return this.baseUrl + this.tags.join();
		}
	});
});
