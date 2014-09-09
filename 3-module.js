var file = require('./file');
var path = process.argv[2];

var format = function(date) {
	return date.getDate() + "." +
		   (date.getMonth()+1) + "." +
		   date.getFullYear() + " " +
		   date.getHours() + ":" + 
		   date.getMinutes();

}

var checkDate = function(modified){
	var formatted = format(new Date(modified));
	console.log(formatted);
}

file.timestamp(path, checkDate);