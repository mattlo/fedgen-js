#! /usr/bin/env node

require('colors');

var fs = require('fs'),
	q = require('q');
	
q.when(true)

.then(mkdir('src/'))
.then(mkdir('src/css'))
.then(mkdir('src/scss'))
.then(mkdir('src/app'))
.then(mkdir('src/views'))
.then(mkdir('src/assets'))
.then(mkdir('util'))

.fail(function (err) {
	console.error(err);
});


function mkdir (path) {
	return function () {
		var deferred = q.defer();
		
		fs.mkdir(path, function (err) {
			if (err) {
				deferred.reject(new Error(err));
			} else {
				deferred.resolve();
				console.log('  created directory: '.magenta + path.white);
			}
		});

		return deferred.promise;
	};
}