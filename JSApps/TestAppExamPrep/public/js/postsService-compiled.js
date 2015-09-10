'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsDBOperationsJs = require('js/DBOperations.js');

var _jsDBOperationsJs2 = _interopRequireDefault(_jsDBOperationsJs);

var _jsTemplatesJs = require('js/templates.js');

var _jsTemplatesJs2 = _interopRequireDefault(_jsTemplatesJs);

//import 'js/jquery.quick.pagination.js'

require('../bower_components/jquery-quick-pagination/js/jquery.quick.pagination.js');

exports['default'] = {

	getAll: function getAll(sammy) {
		_jsDBOperationsJs2['default'].getAllPosts().success(function (posts) {
			console.log('Posts: ', posts);

			_jsTemplatesJs2['default'].get('post').then(function (template) {
				$('#content').html(template(posts));

				$('#btn-search-posts').on('click', function () {

					var pagesSize = $('#dd-page-size option:selected').text();

					$(".pagination2").quickPager({ pageSize: pagesSize });

					sammy.reload();

					_jsDBOperationsJs2['default'].getAllPosts().success(function (data) {
						console.log(data);
					});
				});

				$('#btn-submit-post').on('click', function () {
					var title = $('#tb-title').val(),
					    body = $('#tb-body').val();

					_jsDBOperationsJs2['default'].createPost(title, body).success(function (data) {
						console.log(data);
					}).error(function (data) {
						console.log('Error creating post: ', data);
					});
				});
			});
		});
	},

	pushPost: function pushPost(title, body) {
		_jsDBOperationsJs2['default'].createPost(title, body).success(function (data) {
			console.log(data);
		});
	}

};
module.exports = exports['default'];

//# sourceMappingURL=postsService-compiled.js.map