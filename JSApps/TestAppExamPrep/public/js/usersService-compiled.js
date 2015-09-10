'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsTemplatesJs = require('js/templates.js');

var _jsTemplatesJs2 = _interopRequireDefault(_jsTemplatesJs);

var _jsDBOperationsJs = require('js/DBOperations.js');

var _jsDBOperationsJs2 = _interopRequireDefault(_jsDBOperationsJs);

exports['default'] = {
	registerUser: function registerUser(username, password) {
		console.log('register');

		_jsTemplatesJs2['default'].get('register').then(function (template) {
			$('#content').html(template);

			$('#btn-register').on('click', function () {
				var username = $('#tb-user').val();
				var password = $('#tb-pass').val();

				_jsDBOperationsJs2['default'].register(username, password).success(function (data) {
					console.log('user-' + username + ' registered ' + 'successfully', data);
				}).error(function (data) {
					console.log('failed register ', data);
				});
			});
		});
	},

	loginUser: function loginUser(username, password) {
		console.log('loging in');
		_jsTemplatesJs2['default'].get('login').then(function (template) {
			$('#content').html(template);

			$('#btn-login').on('click', function () {
				var username = $('#tb-user').val();
				var password = $('#tb-pass').val();
				console.log('IN THE BUTTON', username, password);

				_jsDBOperationsJs2['default'].login(username, password).success(function (data) {
					console.log(data);
					//set sessionKey
					localStorage.setItem('sessionKey', data.sessionKey);
					localStorage.setItem('username', data.username);
				}).error(function (data) {
					console.log('login failed', data);
				});
			});
		});
	}
};
module.exports = exports['default'];

//# sourceMappingURL=usersService-compiled.js.map