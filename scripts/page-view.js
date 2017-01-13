define('page-view', ['backbone', 'text!/html/page-template.html'], function (Backbone, template) {
	'use strict';

	return Backbone.View.extend({
		el: 'body',

		render: function () {
			this.$el.html(template);
		}
	});
});
