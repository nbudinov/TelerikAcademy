
//var templates = (function () {
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = {

	get: function get(name) {
		var promise = new Promise(function (resolve, reject) {
			var url = 'js/templates/' + name + '.handlebars';
			console.log(url);
			$.get(url, function (tempHtml) {
				var template = Handlebars.compile(tempHtml);
				resolve(template);
			});
		});

		return promise;
	}

};
module.exports = exports['default'];

//# sourceMappingURL=templates-compiled.js.map