import '../bower_components/jquery/dist/jquery.js';
import '../bower_components/sammy/lib/sammy.js';

import UsersService from 'js/usersService.js';

var sammyApp = Sammy('#content', function() {

	this.get('#/', function() {
		console.log('ROOT')
	});

	this.get('#/login', UsersService.loginUser);

	this.get('#/register', UsersService.registerUser);

});

sammyApp.run('#/');