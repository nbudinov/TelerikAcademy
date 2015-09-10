'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function encode(username, password) {
	var res = username + password;

	return sha1(res);
}

exports['default'] = {
	login: function login(username, password) {
		var authCode = encode(username, password);
		console.log('SHA ', authCode);
		return $.ajax({
			method: 'POST',
			url: 'http://localhost:3100/auth',
			data: {
				"username": username,
				"authCode": authCode
			}
		});
	},

	register: function register(username, password) {
		var authCode = encode(username, password);
		console.log('SHA ', authCode);
		return $.ajax({
			method: 'POST',
			url: 'http://localhost:3100/user',
			data: {
				"username": username,
				"authCode": authCode
			}
		});
	},

	logout: function logout() {},

	getAllPosts: function getAllPosts() {
		return $.ajax({
			method: 'GET',
			url: 'http://localhost:3100/post'
		});
	},

	createPost: function createPost(title, body) {
		return $.ajax({
			method: 'POST',
			url: 'http://localhost:3100/post',
			headers: {
				'X-SessionKey': localStorage.getItem('sessionKey')
			},
			data: {
				"title": title,
				"body": body
			}
		});
	}

};
module.exports = exports['default'];

//# sourceMappingURL=DBOperations-compiled.js.map