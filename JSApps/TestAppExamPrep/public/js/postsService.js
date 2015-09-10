import db from 'js/DBOperations.js'
import templates from 'js/templates.js';

//import 'js/jquery.quick.pagination.js'
import '../bower_components/jquery-quick-pagination/js/jquery.quick.pagination.js'
export default {

	getAll: function(sammy) {
		db.getAllPosts()
			.success(function (posts) {
				console.log('Posts: ', posts);

				templates.get('post')
					.then(function (template) {
						$('#content').html(template(posts));

						$('#btn-search-posts').on('click', function () {

							var pagesSize = $('#dd-page-size option:selected').text();

							$(".pagination2").quickPager({pageSize: pagesSize});

							sammy.reload();

							db.getAllPosts()
								.success(function (data) {
									console.log(data)
								})
						});

						$('#btn-submit-post').on('click', function() {
							var title = $('#tb-title').val(),
								body = $('#tb-body').val();

							db.createPost(title, body)
								.success(function(data) {
									console.log(data);
								})
								.error(function (data) {
									console.log('Error creating post: ', data);
								})
						})
					});
			})

	},

	pushPost: function(title, body) {
		db.createPost(title, body)
			.success(function (data) {
				console.log(data)
			})
	}

}