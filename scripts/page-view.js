define('page-view',
	   ['backbone', 'text!/html/page-template.html', 'page-collection', 'jquery', 'underscore', 'photo-view'],
	   function (Backbone, pageTemplate, PageCollection, $, _, PhotoView) {
		'use strict';

		return Backbone.View.extend({
			el: 'body',
			collection: {},
			subView: {},
			template: _.template(pageTemplate),

			events: {
				'input #search-box': 'updateTags'
			},

			initialize: function () {
				this.collection = new PageCollection();
				this.subView = new PhotoView({collection: this.collection});
			},

			render: function () {
				this.$el.html(this.template({tags: this.collection.tags}));
			},

			// TODO rate limit this function
			updateTags: function (event) {
				var tags = _($(event.target).val().split(' ')).compact();

				this.collection.setTags(tags);
			}
		});
	});
