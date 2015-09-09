import templates from 'js/templates.js';
import db from 'js/DBOperations.js';

export default {
	registerUser: function(username, password) {
		console.log('register')

		templates.get('register')
			.then(function (template) {
				$('#content').html(template);

				$('#btn-register').on('click', function () {
					var username = $('#tb-user').val();
					var password = $('#tb-pass').val();

					db.register(username, password)
						.success(function (data) {
							console.log('user-' + username + ' registered ' +
								'successfully', data);
						})
						.error(function (data) {
							console.log('failed register ', data);
						})
				})
			})
	},

	loginUser: function(username, password) {
		console.log('loging in');
		templates.get('login')
			.then(function (template) {
				$('#content').html(template);

				$('#btn-login').on('click', function() {
					var username = $('#tb-user').val();
					var password = $('#tb-pass').val();
					console.log('IN THE BUTTON', username, password)

					db.login(username, password)
						.success(function(data) {
							console.log(data);
							//set sessionKey
							localStorage.setItem('sessionKey', data.sessionKey);
							localStorage.setItem('username', data.username);
						})
						.error(function(data) {
							console.log('login failed', data);
						})

				})

			})


	}
}

