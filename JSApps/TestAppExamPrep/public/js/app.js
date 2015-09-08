import '../bower_components/jquery/dist/jquery.js';
import '../bower_components/sammy/lib/sammy.js';

var sammyApp = Sammy('#content', function() {
	this.get('#/', function() {
		console.log('dadaad')
	})

	this.get('#/login', function() {
		console.log('loging in');
	})

});

sammyApp.run('#/');