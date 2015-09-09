
function encode(username, password) {
	var res = username + password;

	return sha1(res);
}

export default {
	login: function(username, password) {
		var authCode = encode(username, password);
		console.log('SHA ', authCode);
		return (
			$.ajax({
				method: 'POST',
				url: 'http://localhost:3100/auth',
				data: {
					"username": username,
					"authCode": authCode
				}
			})
		)
	},

	register: function(username, password) {
		var authCode = encode(username, password);
		console.log('SHA ', authCode);
		return (
			$.ajax({
				method: 'POST',
				url: 'http://localhost:3100/user',
				data: {
					"username": username,
					"authCode": authCode
				}
			})

		)
	},

	logout: function() {

	}
}