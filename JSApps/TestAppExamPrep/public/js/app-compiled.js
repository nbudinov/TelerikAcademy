'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../bower_components/jquery/dist/jquery.js');

require('../bower_components/sammy/lib/sammy.js');

var _jsUsersServiceJs = require('js/usersService.js');

var _jsUsersServiceJs2 = _interopRequireDefault(_jsUsersServiceJs);

var _jsPostsServiceJs = require('js/postsService.js');

var _jsPostsServiceJs2 = _interopRequireDefault(_jsPostsServiceJs);

var sammyApp = Sammy('#content', function () {

	this.get('#/', function () {
		console.log('ROOT');
	});

	this.get('#/login', _jsUsersServiceJs2['default'].loginUser);

	this.get('#/register', _jsUsersServiceJs2['default'].registerUser);

	this.get('#/post', _jsPostsServiceJs2['default'].getAll);
});

sammyApp.run('#/');

//# sourceMappingURL=app-compiled.js.map