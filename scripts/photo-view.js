define('photo-view', ['backbone', 'underscore', 'text!/html/photo-template.html', 'jquery'], function (Backbone, _, photoTemplate, $) {
	'use strict';

	return Backbone.View.extend({
		id: 'photo-container',
		collection: {},
		template: _.template(photoTemplate),
		columnWidthMap: {
			xs: 12,
			sm: 6,
			md: 3,
			lg: 2
		},

		initialize: function (options) {
			this.collection = options.collection;
			this.listenTo(this.collection, 'sync', this.render);
		},

		render: function () {
			var self = this,
				htmlString = '',
				currentRowWidth = {
					xs: 0,
					sm: 0,
					md: 0,
					lg: 0
				};

			this.collection.each(function (model) {
				// add clear fixes as needed for each reolution
				_.each(currentRowWidth, function (width, key) {
					var newWidth = width + self.columnWidthMap[key];

					if (newWidth > 12) {
						htmlString += '<div class="clearfix visible-' + key + '-block"></div>';

						newWidth = self.columnWidthMap[key];
					}

					currentRowWidth[key] = newWidth;
				});

				var widthCopy = _.clone(self.columnWidthMap);
				htmlString += self.template(_.extend(widthCopy, model.attributes));
			});

			$('#' + this.id).html(htmlString);
		}
	});
});
