var fs = require('fs');

exports.timestamp = function(path, callback) {
	fs.exists(path, function(exists) {
		if(!exists){
			return callback(exists);
		}
		fs.stat(path, function(err, stats){
			callback(stats.mtime);
		});
	});
};