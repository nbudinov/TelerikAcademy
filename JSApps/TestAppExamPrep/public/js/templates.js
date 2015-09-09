
//var templates = (function () {
export default {

	get: function (name) {
		var promise = new Promise(function(resolve, reject) {
			var url = 'js/templates/' + name + '.handlebars';
			console.log(url)
			$.get(url, function (tempHtml) {
				var template = Handlebars.compile(tempHtml);
				resolve(template);
			})
		});

		return promise;
	}

}
