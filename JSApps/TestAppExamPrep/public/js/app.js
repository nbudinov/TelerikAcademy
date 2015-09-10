import '../bower_components/jquery/dist/jquery.js';
import '../bower_components/sammy/lib/sammy.js';

import UsersService from 'js/usersService.js';
import PostsService from 'js/postsService.js';

var sammyApp = Sammy('#content', function() {

	this.get('#/', function() {
		console.log('ROOT')
	});

	this.get('#/login', UsersService.loginUser);

	this.get('#/register', UsersService.registerUser);

	this.get('#/post', PostsService.getAll);

});

sammyApp.run('#/');