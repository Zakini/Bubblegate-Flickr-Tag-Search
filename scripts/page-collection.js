define('page-collection', ['backbone', 'photo-model', 'jquery', 'underscore'], function (Backbone, PhotoModel, $, _) {
	'use strict';

	return Backbone.Collection.extend({
		tags: [],
		model: PhotoModel,

		// Override sync to only allow get requests
		sync: function (method, model, options) {
			if (method === 'read') {
				options = _.extend(options, {
					jsonp: 'jsoncallback',
					dataType: 'jsonp'
				});

				return Backbone.sync.apply(this, arguments);
			} else {
				// blank deferred
				return $.Deferred().resolve();
			}
		},

		parse: function (response, options) {
			var items = response.items;

			_.each(items, function (item) {
				item.mediaUrl = item.media.m;
			});

			return response.items;
		},

		baseUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&tags=',

		url: function () {
			return this.baseUrl + this.tags.join();
		},

		setTags: function (newTags) {
			this.tags = newTags;
			this.fetch();
		}
	});
});
